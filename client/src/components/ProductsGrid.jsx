import { useContext } from "react";
import ProductCartContext from "../ProductCartContext";
import ProductCard from "./ProductCard";

export default function ProductsGrid() {
  const { products } = useContext(ProductCartContext);

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
