import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home';
import Menus from './pages/Menus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menus />} />
      </Routes>
    </Router>
  );
}


export default App
