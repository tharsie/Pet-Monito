import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';  // Import the SearchBar component

const Navbar = ({ onSearch }) => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-blue-500 text-2xl font-bold">Monito Pet Store</h1>
        

        {/* Links */}
        <ul className="flex space-x-6">
          <li className="text-blue-500 text-l font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="text-blue-500 text-l font-bold">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="text-blue-500 text-l font-bold">
            <Link to="/products">Products</Link>
          </li>
          <li> <SearchBar onSearch={onSearch} /></li>
          <li><button>join the community</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
