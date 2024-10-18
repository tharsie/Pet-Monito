import React, { useEffect, useState } from 'react';
import PetCard from './PetCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import SearchBar from './SearchBar';


const Home = () => {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);

  useEffect(() => {
    fetch('https://monitor-backend-rust.vercel.app/api/pets')
      .then(response => response.json())
      .then(data => {
        setPets(data);
        setFilteredPets(data);
      })
      .catch(error => console.error('Error fetching pets:', error));
  }, []);

  

  const handleSearch = (searchTerm) => {
    const results = pets.filter(pet =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPets(results);
  };

  return (
    
    <div className="container mx-auto mt-10">
      <SearchBar onSearch={handleSearch} />
      <h1 className="text-3xl font-bold mb-6">Available Pets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPets.map(pet => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}

export default Home;

