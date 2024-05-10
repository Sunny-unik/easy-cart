import { useContext, useState } from "react";
import ProductCartContext from "../ProductCartContext";
import axios from "axios";

export default function Cart() {
  const { cartItems, removeFromCart, emptyCart } =
    useContext(ProductCartContext);
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  let totalPrice = 0;

  const togglePopover = () => setIsPopoverVisible(!isPopoverVisible);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      [firstName, lastName, address] = [...formData.values()];
    try {
      const response = await axios.post("http://localhost:4000/product/order", {
        firstName,
        lastName,
        address,
      });
      if (response.data.status === "ok") {
        emptyCart();
        setIsPopoverVisible(false);
        return alert(response.data.message);
      }
      const errors = response.data.errors;
      if (errors.length) {
        const errorsString = errors.join(",\n");
        alert(
          `${errorsString.charAt(0).toUpperCase()}${errorsString.slice(1)}.`
        );
      } else alert("Server Error, Try Again Later");
    } catch (error) {
      alert("Error creating product:", error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => {
            totalPrice += +item.price.split("$").reverse()[0];
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
          <div className="flex items-center justify-end mt-6">
            <div>
              <span className="me-3">Total amount: ${totalPrice}</span>
              <button
                className="bg-violet-500 text-white py-2 px-4 rounded-lg hover:bg-violet-600"
                onClick={togglePopover}
              >
                Place Order
              </button>
            </div>
          </div>
          {isPopoverVisible && (
            <>
              <div className="fixed inset-0 z-20 bg-gray-800 opacity-50"></div>
              <div className="fixed inset-0 z-30 flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                  <div className="mb-4">
                    <span className="text-2xl font-bold mb-4">Form</span>
                    <button
                      onClick={togglePopover}
                      className="float-end text-2xl text-gray-500 hover:text-gray-700"
                    >
                      &times;
                    </button>
                  </div>
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="block text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastName" className="block text-gray-700">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full p-2 border rounded-md"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="address" className="block text-gray-700">
                        Address
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        className="w-full p-2 border rounded-md"
                        required
                      ></textarea>
                    </div>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
