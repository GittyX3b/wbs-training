import './index.css';

import { useReducer } from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 29.99 },
  { id: 2, name: 'Product 2', price: 49.99 },
  { id: 3, name: 'Product 3', price: 19.99 },
];

const formatCurrency = (amount) =>
  new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);

const initialState = {
  user: 'Anoj',
  items: [],
  total: formatCurrency(0),
  itemCount: 0,
};

const cartReducer = (state, action) => {
  const recalculateCart = (items) => {
    const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
    const total = formatCurrency(
      items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    );
    return { ...state, items, itemCount, total };
  };

  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id,
      );

      let newItems;
      if (existingProduct) {
        newItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return recalculateCart(newItems);
    }

    case 'REMOVE_FROM_CART': {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload,
      );

      let newItems;
      if (existingProduct.quantity === 1) {
        newItems = state.items.filter((item) => item.id !== action.payload);
      } else {
        newItems = state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }

      return recalculateCart(newItems);
    }

    case 'EMPTY_CART':
      return {
        ...state,
        items: [],
        itemCount: 0,
        total: formatCurrency(0),
      };

    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {cart.user} this is your shopping cart
          </div>

          <ul className="mt-4">
            {products.map((product) => (
              <li
                key={product.id}
                className="flex justify-between items-center p-2"
              >
                <span>{product.name}</span>
                <span>{formatCurrency(product.price)}</span>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded ml-4"
                  onClick={() =>
                    dispatch({ type: 'ADD_TO_CART', payload: product })
                  }
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h2 className="text-lg font-bold">Cart Items</h2>
            <ul className="mt-2">
              {cart.items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center p-2"
                >
                  <span>{item.name}</span>
                  <span>
                    {formatCurrency(item.price)} x {item.quantity}
                  </span>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded ml-4"
                    onClick={() =>
                      dispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: item.id,
                      })
                    }
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right font-bold">Total: {cart.total}</div>
            <div className="mt-4 text-right font-bold">
              Item count: {cart.itemCount}
            </div>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded ml-4"
              onClick={() => dispatch({ type: 'EMPTY_CART' })}
            >
              Empty cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => <ShoppingCart />;

export default App;
