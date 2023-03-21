import React from "react";
import { Link } from "react-router-dom";
import fortnite from "./img/fortnite.avif";

function Homepage() {
  return (
    <div className="homepage">
      <img src={fortnite} alt={fortnite} className="home-img" />
      <Link to="/shop/pickaxes">
        <div className="home-text">
          <h1 className="text-with-background page-name">FN-STORE</h1>
          <p className="text-with-background welcome-text">
            Gear up for victory! Find everything you need in our Fortnite item
            shop.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Homepage;
