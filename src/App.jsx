import animals from './data/animals';
import AnimalCard from './components/AnimalCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-700">Zoo Animal Facts</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {animals.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default App;

