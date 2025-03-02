"use client";
import { useState, useEffect } from "react";
import SearchBar from "../search-bar";
import FilterBar from "../filter-bar";
import SortSelector from "../sort-selector";

type Post = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
  tableOfContents: { level: number; text: string }[];
  category: string;
  readingTime: string;
  tags: string[];
};

const BlogPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalPosts: 0,
    limit: 10,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const fetchPosts = async (page: number, limit: number) => {
    const res = await fetch(
      `/api/posts?sortOrder=${sortOrder}&page=${page}&limit=${limit}&category=all`
    );
    const data = await res.json();
    console.log(data);
    setPosts(data.posts);
    setPagination(data.pagination);
  };

  useEffect(() => {
    fetchPosts(pagination.currentPage, pagination.limit);
  }, [sortOrder, pagination.currentPage]);

  // Extract unique categories & tags
  const categories = [...new Set(posts.map((p) => p.category))];
  const tags = [...new Set(posts.flatMap((p) => p.tags))];

  // Search, Filter & Sorting Logic
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory = selectedCategory
      ? post.category === selectedCategory
      : true;

    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;

    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Search, Filter & Sort */}
      <div className="flex flex-wrap gap-4 mb-6">
        <SearchBar
          onSearch={setSearchQuery}
          suggestions={[...categories, ...tags]} // Provide typeahead suggestions
        />
        <FilterBar
          categories={categories}
          tags={tags}
          selectedCategory={selectedCategory}
          selectedTag={selectedTag}
          onCategoryChange={setSelectedCategory}
          onTagChange={setSelectedTag}
        />
        <SortSelector sortOrder={sortOrder} onSortChange={setSortOrder} />
      </div>

      {/* Post List */}
      <div className="grid gap-6">
        {filteredPosts.map((post) => (
          <div key={post.slug} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-600">{post.summary}</p>
            <p className="text-sm text-gray-500">{post.publishedAt}</p>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() =>
            fetchPosts(pagination.currentPage - 1, pagination.limit)
          }
          disabled={pagination.currentPage <= 1}
          className="p-2 bg-gray-300 rounded"
        >
          Previous
        </button>
        <span>
          Page {pagination.currentPage} of {pagination.totalPages}
        </span>
        <button
          onClick={() =>
            fetchPosts(pagination.currentPage + 1, pagination.limit)
          }
          disabled={pagination.currentPage >= pagination.totalPages}
          className="p-2 bg-gray-300 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPosts;
