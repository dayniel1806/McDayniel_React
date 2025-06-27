import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import Order from "./pages/Order";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;
