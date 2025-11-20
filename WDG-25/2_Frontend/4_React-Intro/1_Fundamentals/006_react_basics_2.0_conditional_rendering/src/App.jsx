import './index.css';

/* -----------------------------------------
 * Demo data (would usually come from state or props)
 * ---------------------------------------*/
const user = {
  name: 'Max Mustermann II',
  loggedIn: Math.random() > 0.5,
};

const serverStatus = ['online', 'maintenance', 'offline'][
  Math.floor(Math.random() * 3)
];

const promoActive = Math.random() > 0.7;

/* -----------------------------------------
 * Components that illustrate each pattern
 * ---------------------------------------*/

/* if / else ---------------------------------------*/
const Greeting = ({ user }) => {
  if (!user.loggedIn) {
    return (
      <p className="text-gray-700">
        Welcome, guest.{' '}
        <button className="underline text-yellow-700">Log in</button>
      </p>
    );
  }
  return (
    <p className="text-gray-700">
      Hello, <span className="font-semibold">{user.name}</span>!
    </p>
  );
};

/* switch -------------------------------------------*/
const StatusBadge = ({ status }) => {
  let badge;
  switch (status) {
    case 'online':
      badge = (
        <span className="px-2 py-1 bg-green-600 text-white rounded">
          Online
        </span>
      );
      break;
    case 'maintenance':
      badge = (
        <span className="px-2 py-1 bg-yellow-500 text-white rounded">
          Maintenance
        </span>
      );
      break;
    case 'offline':
    default:
      badge = (
        <span className="px-2 py-1 bg-red-600 text-white rounded">Offline</span>
      );
  }
  return <div>{badge}</div>;
};

/* ternary -----------------------------------------*/
const FruitPick = () => {
  const fruit = Math.random() > 0.5 ? '🍓 Strawberry' : '🍌 Banana';
  return (
    <p className="text-gray-700">
      Today’s random fruit is <span className="font-semibold">{fruit}</span>
    </p>
  );
};

/* logical AND -------------------------------------*/
const PromoBanner = () =>
  promoActive && (
    <div className="mt-4 p-4 bg-yellow-100 border-l-4 border-yellow-600">
      <p className="text-yellow-800 font-medium">
        Limited offer — free extra shot with any latte!
      </p>
    </div>
  );

/* -----------------------------------------
 * Root component
 * ---------------------------------------*/
const App = () => (
  <main className="p-8 font-sans space-y-6 max-w-md mx-auto">
    <h3 className="text-2xl font-bold text-center mb-4">
      Conditional Rendering
    </h3>

    <Greeting user={user} />
    <StatusBadge status={serverStatus} />
    <FruitPick />
    <PromoBanner />
  </main>
);

export default App;
