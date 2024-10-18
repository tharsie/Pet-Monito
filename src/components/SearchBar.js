import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (!searchTerm) {
      alert('Please enter a search term');
      return;
    }
    onSearch(searchTerm);
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search for pets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded-l-lg w-2/3"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-r-lg">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
