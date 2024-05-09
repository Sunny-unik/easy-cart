import { useContext } from "react";
import ProductCartContext from "../ProductCartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(ProductCartContext);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => {
            console.log(item);
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-4 mb-4"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-900 font-semibold">{item.price}</p>
                    <p className="text-gray-700">Quantity: {item.quantity}</p>
                  </div>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
