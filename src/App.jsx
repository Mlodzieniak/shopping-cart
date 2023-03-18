import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Nav from "./components/NavBar";
import Shop from "./components/Shop";
import Item from "./components/Item";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
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
