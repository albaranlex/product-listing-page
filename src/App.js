import React, { useState } from "react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
import data from "./data/products";
import "./scss/main.scss";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <div className="front">
        <Header />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
        <Landing />
        <Main products={products} onAdd={onAdd} />
        <Footer />
      </div>
      <div className="circle"></div>
      <div className="square"></div>
    </div>
  );
}

export default App;
