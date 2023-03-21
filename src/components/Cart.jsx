/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from "react";
import { arrayOf, number, object, func } from "prop-types";
import CartItem from "./CartItem";

function Cart({ items, position, cartNavi }) {
  const [total, setTotal] = useState([]);
  return (
    <div
      className="cart-wrapper"
      style={{ transform: `translateX(${position}px)` }}
    >
      <div className="cart">
        <h2 className="cart-title">Cart</h2>
        <div className="cart-list">
          {items.length > 0 ? (
            items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                total={total}
                setTotal={setTotal}
              />
            ))
          ) : (
            <h3>Cart is Empty</h3>
          )}
        </div>
        <div className="total-price">
          <p>
            Total price:
            {total.reduce((acc, red) => acc + red.price, 0)}
          </p>
        </div>
        <button type="button">Checkout</button>
        <button type="button" className="close-cart-btn" onClick={cartNavi}>
          X
        </button>
      </div>
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
  // removeFromCart: func.isRequired,
};

export default Cart;
