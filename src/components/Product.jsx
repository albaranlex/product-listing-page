import React from "react";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="card" onClick={() => onAdd(product)}>
      <div className="card_img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="card_details">
        <div className="card_description">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>
            {product.currency}
            {product.price}
          </p>
        </div>
        <div className="overlay">
          <div className="text">&#8595; Calorie, &#8595; Carb, Vegan</div>
        </div>
      </div>

      <div className="card_button">
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
