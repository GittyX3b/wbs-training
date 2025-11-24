import './index.css';

import { useEffect, useState } from 'react';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

    const getPokemon = async () => {
      setLoading(true);
      setError(null);
      await sleep(2000); // simulate 2-second delay
      try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        if (!res.ok) throw new Error('Something went wrong');
        const data = await res.json();
        if (!ignore) {
          setPokemon(data.results);
        }
      } catch (e) {
        if (!ignore) {
          setError('Failed to fetch Pokémon.');
          console.error(e);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    getPokemon();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans">
      <h2 className="text-2xl font-bold text-center mb-6">
        Pokédex (First 151 Pokémon)
      </h2>
      {loading && (
        <p className="text-center text-gray-600 font-medium">Loading...</p>
      )}
      {error && (
        <p className="text-center text-red-500 font-semibold">{error}</p>
      )}
      {!loading && !error && (
        <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto">
          {pokemon.map((p) => (
            <div
              key={p.name}
              className="bg-white p-4 rounded shadow text-center capitalize hover:shadow-md transition-shadow"
            >
              <span className="font-semibold text-yellow-700">{p.name}</span>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default App;
