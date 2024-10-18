import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // Get the product ID from URL

const ProductDetail = () => {
  const { id } = useParams();  // Get the product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://monitor-backend-rust.vercel.app/api/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);  // Run when the ID changes

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto mt-10">
      {product && (
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto object-cover rounded-md shadow-lg"
            />
          </div>

          {/* Product Information */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-700 text-xl mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-blue-600 mb-4">Price: ${product.price}</p>

            {/* Additional Info */}
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Category: </span> {product.category}
            </p>
            <p className="text-gray-600 mb-6">
              <span className="font-semibold">Available Stock: </span> {product.stock}
            </p>

            {/* Purchase Button */}
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
