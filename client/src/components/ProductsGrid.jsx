import ProductCard from "./ProductCard";

export default function ProductsGrid() {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "Product 1",
      description: "Description of Product 1",
      price: "$10.00",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Product 2",
      description: "Description of Product 2",
      price: "$15.00",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Product Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
