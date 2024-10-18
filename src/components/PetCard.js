import React from 'react';

const PetCard = ({ pet }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img
        src={pet.imageUrl || 'default-image-url.jpg'} // Add a default image URL if none is provided
        alt={pet.name}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{pet.name}</h3>
        <p className="text-blue-600">Price: {pet.price}</p>
      </div>
    </div>
  );
};

export default PetCard;
