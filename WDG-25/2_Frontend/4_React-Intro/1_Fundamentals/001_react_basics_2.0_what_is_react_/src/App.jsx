import "./index.css";

/* -----------------------------------------
 * This is our state, the single source of truth for our tiny app
 * ---------------------------------------*/
const appState = {
  /* Flip any `online` flag, change the names of any user or even add new one, React will update the UI */
  users: [
    { id: 1, name: "Ada Lovelace", online: true },
    { id: 2, name: "Grace Hopper", online: false },
    { id: 3, name: "Alan Turing", online: true },
  ],
};

/* -----------------------------------------
 * Presentational components
 * ---------------------------------------*/
const UserRow = ({ user }) => {
  return (
    <li
      className={
        "flex items-center justify-between px-3 py-2 rounded " +
        (user.online ? "bg-green-100" : "bg-red-100")
      }
    >
      <span className="font-medium">
        {user.online ? "🟢" : "🔴"} {user.name}
      </span>
    </li>
  );
};

const UserList = ({ users }) => {
  return (
    <>
      <h2 className="text-lg font-semibold mb-2">
        Team status ({users.filter((u) => u.online).length}/{users.length}{" "}
        online)
      </h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <UserRow key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};

/* -----------------------------------------
 * Root component — UI = f(state)
 * ---------------------------------------*/
const App = () => {
  return (
    <div className="p-6 space-y-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">What is React?</h1>
      <UserList users={appState.users} />
    </div>
  );
};

export default App;
