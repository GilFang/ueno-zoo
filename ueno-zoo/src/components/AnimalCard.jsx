import React, { useState } from 'react';

export default function AnimalCard({ animal, onBack }) {

  return (
    <div 
      className="max-w-md bg-white shadow-md rounded-2xl p-4"
    >

      <h2 className="text-xl font-semibold text-gray-800">{animal.name}</h2>
        <p className="text-gray-600 italic">{animal.scientificName}</p>

        <p className="text-gray-600 mt-2">Type: {animal.type}</p>
        <p className="text-gray-600">Diet: {animal.diet}</p>
        <p className="text-gray-600"> Habitat: {animal.habitat}</p>

        <p className="text-gray-600 mt-2 border-t border-gray-200 pt-2">
          {animal.fact}
        </p>

        <button
          onClick={onBack}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
            Back to List
        </button>
    </div>
  );
}

