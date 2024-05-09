export default function ProductCard(props) {
  // eslint-disable-next-line react/prop-types
  const product = props.product || {};

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
        <span className="text-xl font-semibold">{product.price}</span>
        <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
