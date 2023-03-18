/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
import React from "react";
import { arrayOf, number, object, func } from "prop-types";

function Cart({ items, position, cartNavi }) {
  //   const [cartPos] = useState(position);
  //   useEffect(() => {
  //     console.log(`Cart pos from Fart${cartPos}`);
  //   }, [position]);
  return (
    <div className="cart" style={{ transform: `translateX(${position}vw)` }}>
      <h3>Cart</h3>
      <div className="list">
        {items.map((item) => (
          <div className="cart-item">{item}</div>
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
};

export default Cart;
