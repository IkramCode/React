import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Features/Slices/cartSlice";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Error while fetching api");
        }
        const result = await response.json();
        setProducts(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {loading && <div>Loading ...</div>}
      {error && <div>Error: {error.message}</div>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain p-4" />
            <div className="p-4">
              <p className="text-lg font-semibold mb-2">{product.title}</p>
              <p className="font-semibold text-gray-800">Price: ${product.price}</p>
              <button
                onClick={() =>
                  cartItems.some((item) => item.item.id === product.id)
                    ? handleRemoveFromCart(product.id)
                    : handleAddToCart(product)
                }
                className={`w-full py-2 px-4 rounded mt-2 font-bold transition-colors duration-300 ${
                  cartItems.some((item) => item.item.id === product.id)
                    ? "bg-red-500 hover:bg-red-700 text-white"
                    : "bg-green-500 hover:bg-green-700 text-white"
                }`}
              >
                {cartItems.some((item) => item.item.id === product.id)
                  ? "Remove from cart"
                  : "Add to cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
