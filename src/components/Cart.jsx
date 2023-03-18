/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
import React from "react";
import { arrayOf, number, object, func } from "prop-types";

function Cart({ items, position, cartNavi, removeFromCart }) {
  return (
    <div className="cart" style={{ transform: `translateX(${position}vw)` }}>
      <h3>Cart</h3>
      <div className="list">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <button
              className="delete-from-cart-btn"
              type="button"
              onClick={() => removeFromCart(item)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <button type="button">Checkout</button>
      <button type="button" className="close-cart-btn" onClick={cartNavi}>
        X
      </button>
    </div>
  );
}
Cart.defaultProps = {
  items: [],
  //   position: 0,
};
Cart.propTypes = {
  items: arrayOf(object),
  position: number.isRequired,
  cartNavi: func.isRequired,
  removeFromCart: func.isRequired,
};

export default Cart;
