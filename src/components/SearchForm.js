// components/SearchForm.js

import React, { useState } from 'react';
import './SearchForm.css';
function SearchForm({ onSearch }) {
  const [filters, setFilters] = useState({
    status: '',
    original_launch: '',
    type: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(filters);
  };
  return (
    <div className="SearchForm">
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">Search SpaceX Data</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap">
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={filters.status}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded mr-2 mb-2"
        />
        <input
          type="text"
          name="original_launch"
          placeholder="Original Launch Date"
          value={filters.original_launch}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded mr-2 mb-2"
        />
        <input
          type="text"
          name="type"
          placeholder="Type"
          value={filters.type}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded mr-2 mb-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Search
        </button>
      </form>
    </div>
    </div>
  );
}

export default SearchForm;
