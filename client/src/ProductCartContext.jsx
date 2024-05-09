import axios from "axios";
import { createContext, useState, useEffect } from "react";

const ProductCartContext = createContext();

export const ProductCartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios("http://localhost:4000/product")
      .then((res) => setProducts(res.data.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
    alert("Product Added to Cart");
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <ProductCartContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ProductCartContext.Provider>
  );
};

export default ProductCartContext;
