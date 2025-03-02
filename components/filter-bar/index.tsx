type FilterBarProps = {
  categories: string[];
  tags: string[];
  selectedCategory: string | null;
  selectedTag: string | null;
  onCategoryChange: (category: string | null) => void;
  onTagChange: (tag: string | null) => void;
};

const FilterBar = ({
  categories,
  tags,
  selectedCategory,
  selectedTag,
  onCategoryChange,
  onTagChange,
}: FilterBarProps) => {
  return (
    <div className="flex gap-4">
      {/* Category Filter */}
      <select
        value={selectedCategory || ""}
        onChange={(e) => onCategoryChange(e.target.value || null)}
        className="p-2 border rounded"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Tag Filter */}
      <select
        value={selectedTag || ""}
        onChange={(e) => onTagChange(e.target.value || null)}
        className="p-2 border rounded"
      >
        <option value="">All Tags</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
