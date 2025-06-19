import React, { useState } from 'react';

export default function AnimalCard({ animal }) {

  return (
    <div 
      className="bg-white shadow-md rounded-2xl p-4 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
    >
      <h2 className="text-xl font-semibold text-gray-800">{animal.name}</h2>
        <p className="text-gray-600 italic">{animal.scientificName}</p>
        <p className="text-gray-600 mt-2">{animal.habitat}</p>

        <p className="text-gray-600 mt-2 border-t border-gray-200 pt-2">
          {animal.fact}
        </p>
    </div>
  );
}

