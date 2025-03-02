import { fetchPostsMetadataWithTableOfContents } from "@/utils/posts"; // Update import path if necessary
import { type NextRequest, NextResponse } from "next/server";
import z from "zod";

const SortOrderSchema = z.enum(["asc", "desc"]);
const categorySchema = z.enum(["all", "web", "mobile", "devops", "cloud"]);
const PaginationSchema = z.object({
  page: z.coerce.number().min(1).optional(), // Default page is 1 if not provided
  limit: z.coerce.number().min(1).max(100).optional(), // Default limit is 10 if not provided
});

const filterSchema = z.object({
  sortOrder: SortOrderSchema.optional().default("desc"),
  category: categorySchema.optional().default("all"),
  page: PaginationSchema.shape.page.optional(),
  limit: PaginationSchema.shape.limit.optional(),
});

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const filter = filterSchema.safeParse({
      sortOrder: searchParams.get("sortOrder"),
      category: searchParams.get("category"),
      page: searchParams.get("page"),
      limit: searchParams.get("limit"),
    });
    if (!filter.success) {
      return NextResponse.json(
        { error: filter.error?.errors },
        { status: 400 }
      );
    }
    const { sortOrder, category, page, limit } = filter.data;

    // Default pagination values
    const currentPage = page || 1;
    const pageLimit = limit || 10;
    const allPosts = await fetchPostsMetadataWithTableOfContents({
      sortOrder: sortOrder || "desc", // Default to "desc"
    });
    // Apply category filter if provided
    const filteredPosts =
      category && category !== "all"
        ? allPosts.filter((post) => post.category === category)
        : allPosts;

    // Calculate pagination values
    const totalPosts = filteredPosts.length;
    const totalPages = Math.ceil(totalPosts / pageLimit);

    // Get the posts for the current page
    const paginatedPosts = filteredPosts.slice(
      (currentPage - 1) * pageLimit,
      currentPage * pageLimit
    );

    return NextResponse.json(
      {
        posts: paginatedPosts,
        pagination: {
          currentPage,
          totalPages,
          totalPosts,
          limit: pageLimit,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching posts" },
      { status: 500 }
    );
  }
}
