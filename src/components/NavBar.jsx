import { func } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

function Nav({ cartNavi }) {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">SHOPLOGO</Link>
      </div>
      <ul className="nav-ul">
        <Link to="/shop/pickaxes">Shop</Link>
        <Link to="/about">About</Link>
      </ul>
      <button className="nav-cart" type="button" onClick={cartNavi}>
        Cart
      </button>
    </div>
  );
}
Nav.propTypes = {
  cartNavi: func.isRequired,
};

export default Nav;
