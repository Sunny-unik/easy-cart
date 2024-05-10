import { useContext } from "react";
import ProductCartContext from "../ProductCartContext";

export default function ProductCard(props) {
  const product = props.product || {};
  const { addToCart } = useContext(ProductCartContext);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-semibold">
          {product.price && product.price.includes("$")
            ? product.price
            : "$" + product.price}
        </span>
        <button
          className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
