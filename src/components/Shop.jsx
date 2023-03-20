import React from "react";
import { func } from "prop-types";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Items from "./Items";

function Shop({ addToCart }) {
  const location = useLocation();
  const pickaxe = location.pathname === "/shop/pickaxes";
  const glider = location.pathname === "/shop/gliders";
  const backpack = location.pathname === "/shop/backpacks";
  const isActive = (path) => (path ? "type-btn active-type" : "type-btn");

  return (
    <div className="shop">
      <div className="shop-types">
        <Link to="/shop/pickaxes">
          <button type="button" className={isActive(pickaxe)}>
            Pickaxes
          </button>
        </Link>
        <Link to="/shop/gliders">
          <button type="button" className={isActive(glider)}>
            Gliders
          </button>
        </Link>
        <Link to="/shop/backpacks">
          <button type="button" className={isActive(backpack)}>
            Backpacks
          </button>
        </Link>
      </div>
      <Routes>
        <Route
          path="/pickaxes"
          element={<Items addToCart={addToCart} itemType="pickaxe" />}
        />
        <Route
          path="/gliders"
          element={<Items addToCart={addToCart} itemType="glider" />}
        />
        <Route
          path="/backpacks"
          element={<Items addToCart={addToCart} itemType="backpack" />}
        />
      </Routes>
    </div>
  );
}
Shop.propTypes = {
  addToCart: func.isRequired,
};
export default Shop;
