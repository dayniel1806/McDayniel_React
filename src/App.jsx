import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import Order from "./pages/Order";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Story from "./pages/Story";
import ScrollToTop from "./components/ScrollToTop";function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/order" element={<Order />} />
          <Route path="/ourStory" element={<Story />} />
        </Routes>
      </Router>
    </>
  );
}


export default App;
