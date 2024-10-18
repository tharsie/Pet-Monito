import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Monito Pet Store</h1>
        <ul className="flex space-x-6">
          <li className="text-white hover:text-gray-200 cursor-pointer">Home</li>
          <li className="text-white hover:text-gray-200 cursor-pointer">Pets</li>
          <li className="text-white hover:text-gray-200 cursor-pointer">Products</li>
          <li className="text-white hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
