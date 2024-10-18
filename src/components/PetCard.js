import React from 'react';

const PetCard = ({ pet }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img src={pet.imageUrl} alt={pet.name} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{pet.name}</h2>
        <p className="text-gray-600 mt-2">{pet.description}</p>
        <p className="text-blue-500 font-bold mt-2">Price: {pet.price}</p>
      </div>
    </div>
  );
}

export default PetCard;
