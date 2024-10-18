import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError(`Failed to fetch categories: ${error.message}`);
      }
       finally {
        setLoading(false);
      }
    };
  
    fetchCategories();
  }, []);
  

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error fetching categories: {error}</p>;

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">Pet Categories</h1>

      {/* Grid Layout for Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col items-center"
          >
            {/* Image */}
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />

            {/* Category Name */}
            <h2 className="text-xl font-semibold">{category.name}</h2>

            {/* Link to the product list or detail page */}
            <Link
              to={`/category/${category.id}`}  // Link to the category's products page
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              View {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
