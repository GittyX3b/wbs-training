import './index.css';

import { useState } from 'react';

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

const ShoppingCart = () => {
  const [cart, setCart] = useState({
    user: 'Anoj',
    items: [],
    total: formatCurrency(0),
    itemCount: 0,
  });

  const addToCart = (product) => {
    setCart((prevCart) => {
      const { items, ...rest } = prevCart;
      const existingProduct = items.find((item) => item.id === product.id);
      if (existingProduct) {
        const newItems = items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        return {
          ...rest,
          items: newItems,
          itemCount: newItems.reduce((acc, item) => acc + item.quantity, 0),
          total: formatCurrency(
            newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
          ),
        };
      } else {
        const newItems = [...items, { ...product, quantity: 1 }];
        const itemCount = newItems.reduce(
          (acc, item) => acc + item.quantity,
          0,
        );
        const total = formatCurrency(
          newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
        );
        return { ...rest, items: newItems, itemCount, total };
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const { items, ...rest } = prevCart;
      const existingProduct = items.find((item) => item.id === productId);
      if (existingProduct.quantity === 1) {
        const newItems = items.filter((item) => item.id !== productId);
        return {
          ...rest,
          items: newItems,
          itemCount: newItems.reduce((acc, item) => acc + item.quantity, 0),
          total: formatCurrency(
            newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
          ),
        };
      } else {
        const newItems = items.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
        return {
          ...rest,
          items: newItems,
          itemCount: newItems.reduce((acc, item) => acc + item.quantity, 0),
          total: formatCurrency(
            newItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
          ),
        };
      }
    });
  };

  const emptyCart = () => {
    setCart((prev) => ({
      ...prev,
      items: [],
      total: formatCurrency(0),
      itemCount: 0,
    }));
  };

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
                  onClick={() => addToCart(product)}
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
                    onClick={() => removeFromCart(item.id)}
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
              onClick={emptyCart}
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
