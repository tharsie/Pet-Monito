import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Monito Pet Store</h1>
        <ul className="flex space-x-6">
          <li className="text-white hover:text-gray-200 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white hover:text-gray-200 cursor-pointer">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="text-white hover:text-gray-200 cursor-pointer">
            <Link to="/products">Products</Link> {/* Link to the Products page */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
