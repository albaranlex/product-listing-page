import React, { useState } from "react";
import Product from "./Product";

export default function Products(props) {
  const { products, onAdd } = props;
  const [productArr, setProductArr] = useState(products);

  //infinity scroll
  window.onscroll = function () {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setProductArr(productArr.concat(productArr));
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
                  let filteredArr = products.filter((item) =>
                    cat === "All" ? item : item.category === cat
                  );
                  setProductArr(filteredArr);
                  console.log(filteredArr);
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
        {productArr.map((product, i) => (
          <Product key={i} product={product} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
}
