import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Monito Pet Store</h2>
          <p>&copy; 2024 Monito Pet Store. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
