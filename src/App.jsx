import React, { useState } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Nav from "./components/NavBar";
import Shop from "./components/Shop";
import Item from "./components/Item";
import About from "./components/About";
import Cart from "./components/Cart";

function App() {
  const [cartPos, setPosCart] = useState(40);
  const moveCart = () => {
    const result = cartPos === 0 ? setPosCart(40) : setPosCart(0);
    return result;
  };

  return (
    <Router>
      <div className="App">
        <Nav cartNavi={moveCart} />
        <Cart
          position={cartPos}
          cartNavi={moveCart}
          // items={[{ name: "XDD" }, { name: "JP2GMD" }]}
        />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/item" element={<Item />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
