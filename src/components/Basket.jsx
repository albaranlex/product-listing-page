import React, { useState } from "react";
import { GrBasket } from "react-icons/gr";

export default function Basket(props) {
  const [showCart, setShowCart] = useState(false);
  const { countCartItems, cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  return (
    <div className="cart_wrapper">
      <div className="basket">
        <GrBasket size={18} onClick={() => setShowCart(!showCart)} />
        {countCartItems ? (
          <button className="badge">{countCartItems}</button>
        ) : (
          ""
        )}
      </div>
      {showCart && (
        <div className="cart_show">
          <h2>Order Summary</h2>
          <div>
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => (
              <div key={item.id} className="cart_products">
                <div>{item.name}</div>
                <div>
                  <button onClick={() => onRemove(item)} className="remove">
                    -
                  </button>{" "}
                  <button onClick={() => onAdd(item)} className="add">
                    +
                  </button>
                </div>

                <div>
                  {item.qty} x €{item.price.toFixed(2)}
                  <hr />
                </div>
              </div>
            ))}

            {cartItems.length !== 0 && (
              <>
                <div>
                  <div>
                    <strong>Total Price</strong>
                  </div>
                  <div>
                    <strong>€{itemsPrice.toFixed(2)}</strong>
                  </div>
                </div>

                <div>
                  <button onClick={() => alert("Implement Checkout!")}>
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
