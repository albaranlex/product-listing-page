import React, { useState } from "react";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Basket from "./components/Basket";
import products from "./data/products";
import "./scss/main.scss";

function App() {
  //infinity scroll
  const [productArr, setProductArr] = useState(products);

  window.onscroll = function () {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      let arr = productArr.concat(products);
      setProductArr(arr);
      console.log(productArr);
    }
  };

  //Cart
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
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          countCartItems={cartItems.length}
        />
        <Landing />
        <Products products={productArr} onAdd={onAdd} />
        <Footer />
      </div>
      <div className="circle"></div>
      <div className="square"></div>
    </div>
  );
}

export default App;
