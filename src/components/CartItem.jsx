/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState, useEffect } from "react";
import { shape, object, string, func, array } from "prop-types";
import { RemoverContext } from "../App";

function CartItem({ item, total, setTotal }) {
  const removeFromCart = useContext(RemoverContext);
  const [amount, setAmount] = useState(1);
  const increaseAmount = () => setAmount(amount + 1);
  const decreaseAmount = () => setAmount(amount - 1);

  const changeAmount = (e) => {
    setAmount(parseInt(e.target.value, 10));
  };
  useEffect(() => {
    if (amount < 1) removeFromCart(item);
    const priceObj = {
      id: item.id,
      price: amount * item.price,
    };
    setTotal(() => {
      const found = total.find((ele) => ele.id === priceObj.id);
      if (!found) return [...total, priceObj];
      found.price = priceObj.price;
      return [...total];
    });
  }, [amount]);
  const handleRemove = () => {
    const newArr = total.filter((ele) => ele.id !== item.id);
    setTotal(newArr);
    removeFromCart(item);
  };
  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>

        <img
          src={item.images.icon}
          alt={item.name}
          className="cart-item-icon"
        />
      </div>

      <div className="cart-item-price-amount">
        <div>
          <p>Price:</p> <p className="price">{item.price}</p>{" "}
        </div>
        <label htmlFor={item.id}>
          {/* <p>Amount:</p> */}
          <div className="amount">
            <button type="button" onClick={decreaseAmount}>
              -
            </button>
            <input
              className="amount-input no-arrows"
              id={item.id}
              value={amount}
              onChange={changeAmount}
              type="number"
            />
            <button type="button" onClick={increaseAmount}>
              +
            </button>
          </div>
        </label>
      </div>

      <button
        className="delete-from-cart-btn"
        type="button"
        onClick={handleRemove}
      >
        &#10006;
      </button>
    </div>
  );
}
CartItem.propTypes = {
  item: shape({
    id: string,
    images: object,
    name: string,
  }).isRequired,
  total: array.isRequired,
  setTotal: func.isRequired,
};
export default CartItem;
