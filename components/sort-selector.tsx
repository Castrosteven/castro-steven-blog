type SortSelectorProps = {
  sortOrder: "asc" | "desc";
  onSortChange: (order: "asc" | "desc") => void;
};

const SortSelector = ({ sortOrder, onSortChange }: SortSelectorProps) => {
  return (
    <select
      value={sortOrder}
      onChange={(e) => onSortChange(e.target.value as "asc" | "desc")}
      className="p-2 border rounded"
    >
      <option value="desc">Newest First</option>
      <option value="asc">Oldest First</option>
    </select>
  );
};

export default SortSelector;
