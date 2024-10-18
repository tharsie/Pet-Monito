import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

function Card() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the data from the API
  useEffect(() => {
    fetch('https://monitor-backend-rust.vercel.app/api/pets')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch pets');
        }
        return response.json();
      })
      .then((data) => {
        setPets(data);  // Store the data
        setLoading(false);  // Stop loading
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;  // Show loading state
  if (error) return <div>Error: {error}</div>;  // Show error state

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pets.map((pet) => (
          <div key={pet.id} className="bg-white rounded-lg shadow-md p-4">
            <img 
              src={pet.image || 'https://via.placeholder.com/150'}  // Fallback image if pet.image is null
              alt={pet.breed}
              className="w-full h-40 object-cover rounded-t-md mb-4"  // Make the image cover and fit properly
            />
            <h2 className="text-xl font-bold mb-2">{pet.breed}</h2>
            <p className="text-gray-700 mb-2"><strong>Gender:</strong> {pet.gender}</p>
            <p className="text-gray-700 mb-2"><strong>Age:</strong> {pet.age}</p>
            <p className="text-gray-700"><strong>Price:</strong> {pet.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
