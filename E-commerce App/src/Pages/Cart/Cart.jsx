import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    setTotal(cartItems.reduce((acc, curr) => acc + curr.item.price, 0));
  }, [cartItems]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {cartItems.map((product) => (
            <div
              key={product.item.id}
              className="flex bg-white rounded-lg overflow-hidden shadow-md p-4"
            >
              <img
                src={product.item.image}
                alt={product.item.title}
                className="w-24 h-24 object-contain mr-4"
              />
              <div className="flex-1">
                <p className="text-lg font-semibold">{product.item.title}</p>
                <p className="font-semibold text-gray-800">
                  Price: ${product.item.price}
                </p>
              </div>
            </div>
          ))}
          <div className="text-xl font-bold mt-4">
            Total: ${total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
