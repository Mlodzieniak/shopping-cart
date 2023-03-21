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
        <div>
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
        </div>
        <div>
          <div className="total-price">
            <p>
              Total price:
              <p className="price">
                {total.reduce((acc, red) => acc + red.price, 0)}
              </p>
            </p>
          </div>
          <button type="button">Checkout</button>
        </div>
        <button type="button" className="close-cart-btn" onClick={cartNavi}>
          X
        </button>
      </div>
    </div>
  );
}
Cart.defaultProps = {
  items: [],
};
Cart.propTypes = {
  items: arrayOf(object),
  position: number.isRequired,
  cartNavi: func.isRequired,
};

export default Cart;
