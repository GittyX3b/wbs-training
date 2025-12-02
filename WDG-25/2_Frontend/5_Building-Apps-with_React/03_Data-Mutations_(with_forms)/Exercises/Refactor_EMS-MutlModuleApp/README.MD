# Fake eCommerce refactor

It’s been a while since we worked on the 🧩 Multi-module app exercise, where we created a landing page showing products from the Fake Store API and added items to a cart in localStorage. You’ve done and learned so much! Now it’s time to revisit this project and turn it into a React application with a working shopping cart powered by state 💪 Don’t worry. We are gonna take our time.

## Goal:

Create a skeleton for an eCommerce site with React and data from [FakeStoreAPI](https://fakestoreapi.com/). If you need inspiration, check out [this]{https://ecommerce-react-xutq.onrender.com/} example.

### Requirements:

1. Navigation Bar:

   - Available in all routes (create a layout component for your route 😉)
   - Include links to Home and Cart.

2. Home Page:

   - Show a list of all categories from [https://fakestoreapi.com/products/categories]{https://fakestoreapi.com/products/categories}. You are free to choose how they are displayed.
   - Show a list of all products from [https://fakestoreapi.com/products](https://fakestoreapi.com/products) as cards.
   - Each card should display: []title, []price (use Intl.NumberFormat to format your prices to euros), []link to the product category, []add to cart button -> A.If a product is already in the cart, render buttons to remove and add more to the cart (manage quantity, e.g., never go below zero, remove the item instead). + B.It should also show the current amount in the cart.

3. Cart Page:

   - Render a table with the products, the sum of each line, and a total amount.
   - It should also be possible to add or remove items.

### Bonus:

1. Implement DaisyUI:

It will make creating tables, navbars, etc. way easier! 😉
Daisy UI has a skeleton utility if you were curious

2. Store cart in localStorage :

Every time you add or remove an item, save it to localStorage
Don’t forget to pull your cart items from there as the initial state for your cart!

### Tips:

Reuse Utilities: The logic to add or remove to and from the cart is the same regardless of whether it’s happening in the Home page, the Cart page or anywhere else. Think of how you can abstract this logic in an utility file in src/utils . Utilities are convenience functions shared by some part of your code 😀

### Special instructions on passing state with React Router:

We know that state can be shared from a parent to a child component, but not between siblings directly:

`
import { useState } from 'react';

const Child1 = ({ counter }) => {
return `Current value: ${counter}`;
};
const Child2 = ({ setCounter }) => {
return <button onClick={() => setCounter((prev) => prev + 1)}>Click to increase counter</button>;
};

const App = () => {
const [counter, setCounter] = useState(0);
return (
<>
<Child1 counter={counter} />
<br />
<Child2 setCounter={setCounter} />
</>
);
};

export default App;
`

When we create a router with React Router, a layout component is effectively the parent to whatever renders in the Outlet. React Router facilites a way in which we can share state between two different routes!

This works because the MainLayout component is present in the screen whether the Child1 or Child2 components are being rendered in the Outlet .

There’re only two steps to this: - From the layout, pass any value we want to have at our disposal in components rendered in the Outlet , in this case the state and its setter function, as an object in a context property. - From the component rendered in the Outlet , use the useOutletContext hook provided by react-router which returns an object with whatever is present in the Outlet context.

`
import { useState } from 'react';
import {
BrowserRouter,
Link,
Outlet,
Route,
Routes,
useOutletContext,
} from 'react-router';

const MainLayout = () => {
const [counter, setCounter] = useState(0);
return (
<>

   <ul>
   <li>
   <Link to='/'>Child1</Link>
   </li>
   <li>
   <Link to='/child2'>Child2</Link>
   </li>
   </ul>
   <div>
   <Outlet context={{ counter, setCounter }} />
   </div>
   </>
   );
   };

const Child1 = () => {
const { counter } = useOutletContext();
return `Current value: ${counter}`;
};
const Child2 = () => {
const { counter, setCounter } = useOutletContext();
return (
<>

   <div>{counter}</div>
   <button onClick={() => setCounter((prev) => prev + 1)}>
   Click to increase counter and then go back to Child1
   </button>
   </>
   );
   };

const App = () => (
<BrowserRouter>
<Routes>
<Route path={basePath} element={<MainLayout />}>
<Route index element={<Child1 />} />
<Route path="child2" element={<Child2 />} />
</Route>
</Routes>
</BrowserRouter>
);

export default App;
`

And voila! Now you can see the state in one route and change it from another. Something tells us this will help you a lot for this exercise 😌
