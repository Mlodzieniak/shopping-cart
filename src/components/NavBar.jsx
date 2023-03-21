import { func, number } from "prop-types";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as CartIcon } from "./svg/cart.svg";

function Nav({ cartNavi, cartCount }) {
  const location = useLocation();
  const home = location.pathname === "/";
  const shop = /shop/.test(location.pathname);
  const about = location.pathname === "/about";

  const isActive = (path) => (path ? "active-nav arrow-up" : "");
  return (
    <div className="nav">
      <div className="nav-links">
        <div className="logo">
          <Link to="/">
            <h3>FN STORE</h3>
            <div className={isActive(home)} />
          </Link>
        </div>
        <div className="nav-ul">
          <Link to="/shop/pickaxes">
            <h3>Shop</h3>
            <div className={isActive(shop)} />
          </Link>
          <Link to="/about">
            <h3>About</h3>
            <div className={isActive(about)} />
          </Link>
        </div>
      </div>
      <button className="nav-cart-btn" type="button" onClick={cartNavi}>
        Cart
        <CartIcon />
        {cartCount ? <div className="cart-count">{cartCount}</div> : ""}
      </button>
    </div>
  );
}
Nav.defaultProps = {
  cartCount: 0,
};
Nav.propTypes = {
  cartNavi: func.isRequired,
  cartCount: number,
};

export default Nav;
