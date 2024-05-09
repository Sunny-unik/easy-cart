import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { ProductCartProvider } from "./ProductCartContext";

function App() {
  return (
    <ProductCartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/cart" Component={Cart} />
        </Routes>
      </Router>
    </ProductCartProvider>
  );
}

export default App;
