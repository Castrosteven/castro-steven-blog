import { useState, useEffect } from "react";

type SearchBarProps = {
  onSearch: (query: string) => void;
  suggestions: string[];
};

const SearchBar = ({ onSearch, suggestions }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(query);
    }, 300); // Debounce

    return () => clearTimeout(delayDebounceFn);
  }, [query, onSearch]);

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        placeholder="Search by title or tag..."
        className="p-2 border rounded w-full"
      />
      {showSuggestions && query && (
        <ul className="absolute bg-white border w-full shadow rounded mt-1">
          {suggestions
            .filter((s) => s.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 5) // Limit results
            .map((s, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => setQuery(s)}
              >
                {s}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
