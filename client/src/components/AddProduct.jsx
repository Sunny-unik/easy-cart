import { useState, useContext } from "react";
import ProductCartContext from "./../ProductCartContext";
import axios from "axios";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const { refreshProducts } = useContext(ProductCartContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newProduct = {
      name,
      description,
      price,
      image,
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/product/",
        newProduct
      );
      if (response.data.status === "ok") {
        refreshProducts();
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
        alert("Product Added");
      } else {
        const errors = response.data.errors;
        // eslint-disable-next-line no-extra-boolean-cast
        if (!!errors.length) {
          const errorsString = errors.join(",\n");
          alert(
            `${errorsString.charAt(0).toUpperCase()}${errorsString.slice(1)}.`
          );
        } else alert("Server Error, Try Again Later");
      }
    } catch (error) {
      alert("Error creating product:", error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4">Create a New Product</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700">
          Description
        </label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700">
          Price
        </label>
        <input
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
      >
        Create Product
      </button>
    </form>
  );
}
