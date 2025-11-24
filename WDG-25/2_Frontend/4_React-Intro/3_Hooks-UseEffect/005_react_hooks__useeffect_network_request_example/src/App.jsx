import './index.css';

import { useEffect, useState } from 'react';

const App = () => {
  const [limit, setLimit] = useState(25);
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
    const getPokemon = async () => {
      setLoading(true);
      setError(null);
      await sleep(Math.floor(Math.random() * 2000));
      try {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}`,
        );
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
  }, [limit]);

  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-center">
          Pokédex (First {limit} Pokémon)
        </h2>
        <div className="text-center space-y-2">
          <label
            htmlFor="limit"
            className="block text-sm font-medium text-gray-700"
          >
            Choose how many Pokémon to fetch:
          </label>
          <input
            id="limit"
            type="range"
            min={1}
            max={151}
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-gray-600">{limit} Pokémon</p>
        </div>
        {loading && (
          <p className="text-center text-gray-600 font-medium">Loading...</p>
        )}
        {error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}
        {!loading && !error && (
          <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {pokemon.map((p, index) => (
              <div
                key={p.name}
                className="bg-white p-4 rounded shadow text-center capitalize hover:shadow-md transition-shadow"
              >
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                  alt={p.name}
                  className="mx-auto mb-2"
                />
                <span className="font-semibold text-yellow-700">{p.name}</span>
              </div>
            ))}
          </section>
        )}
      </div>
    </main>
  );
};

export default App;
