import React from "react";
import { func } from "prop-types";
import { Link, Routes, Route } from "react-router-dom";
import Items from "./Items";

function Shop({ addToCart }) {
  return (
    <div className="shop">
      <div className="types">
        <Link to="/shop/pickaxes"> Pickaxes</Link>
        <Link to="/shop/gliders"> Gliders</Link>
        <Link to="/shop/backpacks"> Backpacks</Link>
      </div>
      <div className="items">
        <Routes>
          <Route
            path="/Items"
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
    </div>
  );
}
Shop.propTypes = {
  addToCart: func.isRequired,
};
export default Shop;
