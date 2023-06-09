/* eslint-disable import/no-cycle */
import React, { createContext, useCallback, useState } from "react";
import "./styles/App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Nav from "./components/NavBar";
import Shop from "./components/Shop";
import ItemDetails from "./components/ItemDetail";
import About from "./components/About";
import Cart from "./components/Cart";

export const RemoverContext = createContext();

function App() {
  const [cartPos, setPosCart] = useState(400);
  const [cartItems, setCartItems] = useState([]);

  const moveCart = () => {
    const result = cartPos === 0 ? setPosCart(400) : setPosCart(0);
    return result;
  };
  const addToCart = (newItem) => {
    if (!cartItems.find((ele) => ele.id === newItem.id))
      setCartItems([...cartItems, newItem]);
  };
  const removeFromCart = useCallback((itemToRemove) => {
    setCartItems([...cartItems].filter((ele) => ele.id !== itemToRemove.id));
  });

  return (
    <Router basename="/">
      <RemoverContext.Provider value={removeFromCart}>
        <div className="App">
          <Nav cartNavi={moveCart} cartCount={cartItems.length} />
          <Cart position={cartPos} cartNavi={moveCart} items={cartItems} />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop/*" element={<Shop addToCart={addToCart} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/item/:id"
              element={<ItemDetails addToCart={addToCart} />}
            />
          </Routes>
        </div>
      </RemoverContext.Provider>
    </Router>
  );
}

export default App;
