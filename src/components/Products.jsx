import React, { useState } from "react";
import Product from "./Product";

export default function Products(props) {
  const [category, setCategory] = useState("All");
  const { products, onAdd } = props;
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
                onClick={() => setCategory(cat)}
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
          ? products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onAdd={onAdd}
                category={product.category}
              ></Product>
            ))
          : products
              .filter((product) => product.category === category)
              .map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  onAdd={onAdd}
                  category={product.category}
                ></Product>
              ))}
      </div>
    </main>
  );
}
