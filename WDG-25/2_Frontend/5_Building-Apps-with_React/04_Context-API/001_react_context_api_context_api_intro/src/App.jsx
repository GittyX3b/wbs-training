import './index.css';

import { createContext, use } from 'react';

const ParentComponent = () => {
  return (
    <div className="parent">
      <code>ParentComponent</code>
      <ChildComponent />
    </div>
  );
};

const ChildComponent = () => {
  return (
    <div className="child">
      <code>ChildComponent</code>
      <GrandChildComponent />
    </div>
  );
};

const GrandChildComponent = () => {
  const user = use(UserContext);
  return (
    <div className="grandchild">
      <code>GrandChildComponent</code>
      <br />
      {user.name}
    </div>
  );
};

const UserContext = createContext();

const App = () => {
  const user = { name: 'John Doe', age: 30 };

  return (
    <UserContext value={user}>
      <ParentComponent />
    </UserContext>
  );
};

export default App;
