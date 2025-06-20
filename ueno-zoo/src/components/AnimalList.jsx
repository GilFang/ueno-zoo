import React from 'react';

export default function AnimalList({ animals, onSelect }) {
    return(
        <div className="flex flex-col gap-4 overflow-y-auto w-full max-w-md h-full max-h-64 bg-red-100 p-4 rounded-lg">
            <h1 className="text-2xl font-bold ">Select an Animal</h1>
            {animals.map((animal) => (
                <button
                    key={animal.id}
                    onClick={() => onSelect(animal)}
                    className="bg-white shadow-md rounded-lg p-4 hover:bg-gray-50 transition"
                >
                    {animal.name}
                </button>
            ))}
         </div>
    );
}