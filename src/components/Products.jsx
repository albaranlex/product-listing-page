import React, { useState } from "react";
import Product from "./Product";

export default function Products(props) {
  const { products, onAdd } = props;
  const [productArr, setProductArr] = useState(products);
  const [category, setCategory] = useState("All");

  //infinity scroll
  window.onscroll = function () {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setProductArr(productArr.concat(products));
    }
  };

  return (
    <main id="start">
      <div className="product_filter">
        <div className="filter_label">
          <h3> Filter by: </h3>
        </div>

        <div className="filter_buttons">
          {["All", "Low Calorie", "Low Carb", "Low Fat"].map((cat) => {
            return (
              <button
                type="button"
                onClick={() => {
                  setCategory(cat);
                  console.log(productArr);
                }}
                className="btn"
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="product_show">
        {category === "All"
          ? productArr.map((product) => (
              <Product
                key={product.id}
                product={product}
                onAdd={onAdd}
              ></Product>
            ))
          : productArr
              .filter((product) => product.category === category)
              .map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  onAdd={onAdd}
                ></Product>
              ))}
      </div>
    </main>
  );
}
