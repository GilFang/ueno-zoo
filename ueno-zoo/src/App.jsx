import React, { useState, useEffect } from 'react';
import animals from './data/animals';
import AnimalCard from './components/AnimalCard';

export default function App() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (id) {
      const animal = animals.find(a => String(a.id) === id);
      if (animal) {
        setSelectedAnimal(animal);
      }
    } else {
      setSelectedAnimal(animals[0]); 
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="fixed bottom-6 left-6 flex flex-col items-start gap-4 z-50">
        {showInfo && selectedAnimal && (
          <div>
            <AnimalCard animal={selectedAnimal} />
          </div>
        )}
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
        >
          More Info
        </button>
      </div>
    </div>
  );
}
