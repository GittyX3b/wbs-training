import './index.css';

/* -----------------------------------------
 * Demo data – first-gen starters
 * ---------------------------------------*/
const starters = [
  {
    id: 1,
    name: 'Bulbasaur',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    type: 'Grass · Poison',
  },
  {
    id: 4,
    name: 'Charmander',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
    type: 'Fire',
  },
  {
    id: 7,
    name: 'Squirtle',
    sprite:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
    type: 'Water',
  },
];

/* -----------------------------------------
 * Presentational parts
 * ---------------------------------------*/
const PokeCard = ({ poke }) => (
  <article className="flex flex-col items-center p-4 bg-white rounded-lg shadow space-y-2">
    <img src={poke.sprite} alt={poke.name} className="w-20 h-20" />
    <h4 className="font-semibold">{poke.name}</h4>
    <p className="text-xs text-gray-600">{poke.type}</p>
  </article>
);

const PokeGrid = ({ pokemon }) => (
  <section className="grid gap-6 md:grid-cols-3">
    {pokemon.map((p) => (
      <PokeCard key={p.id} poke={p} />
    ))}
  </section>
);

/* -----------------------------------------
 * Root component
 * ---------------------------------------*/
const App = () => (
  <main className="min-h-screen p-8 bg-gray-50 font-sans">
    <h3 className="text-2xl font-bold text-center mb-8">
      First-generation Starters
    </h3>
    {/* List rendered via .map() */}
    <PokeGrid pokemon={starters} />
    {/* Quick example: show only water types */}
    <h3 className="text-xl font-semibold mt-12 mb-4">Water squad</h3>
    {starters
      .filter((p) => p.type.includes('Water'))
      .map((p) => (
        <span key={p.id} className="inline-block mr-2">
          {p.name}
        </span>
      ))}
  </main>
);

export default App;
