import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">SHOPLOGO</Link>
      </div>
      <ul className="nav-ul">
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </ul>
    </div>
  );
}

export default Nav;
