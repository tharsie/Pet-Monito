import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryProductPage = () => {
  const { id } = useParams();  // Get category ID from URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://monitor-backend-rust.vercel.app/api/categories/${id}/products`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error fetching products: {error}</p>;

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Products in this Category</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProductPage;
