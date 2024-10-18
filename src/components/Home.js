import React, { useEffect, useState } from 'react';
import PetCard from './PetCard';
import Navbar from './Navbar';  // Import the Navbar
import { Link } from 'react-router-dom'; 
import backgroundImage from '../assets/images/home-background.png';  // Import background image

const Home = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState([]);

  // Fetch pets
  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPets(data);
        setFilteredPets(data); // Initialize filteredPets with the full pets list
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPets();
  }, []);
  
  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://monitor-backend-rust.vercel.app/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Handle Search
  const handleSearch = (searchTerm) => {
    const results = pets.filter((pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPets(results);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,  // Apply background image  // Cover the entire viewport
        backgroundPosition: 'top',  // Center the image
        backgroundRepeat: 'no-repeat',  // Avoid repeating the image
      }}
    >
      <Navbar onSearch={handleSearch} /> {/* Navbar will inherit the background */}
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div className="container mx-auto mt-10">
        {/* Content */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Available Pets
          </h1>

          {/* Pet Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-6">
            {filteredPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>

          {/* Products Section */}
          <h1 className="text-3xl font-bold mb-6">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow">
                <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-4" />
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
