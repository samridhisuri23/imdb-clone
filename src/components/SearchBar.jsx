// src/components/SearchBar.jsx
import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xl mx-auto my-8">
  <input
    type="text"
    placeholder="Search movies..."
    className="flex-grow w-400 px-4 py-2 border rounded-l-md focus:outline-none"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
  <button
    type="submit"
    className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 "
  >
    Search
  </button>
</form>
  );
}

export default SearchBar;




