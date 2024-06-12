// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Inventario from './Inventario';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inventario" element={<Inventario />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2024 Mi Aplicación</p>
      </footer>
    </div>
  );
}

export default App;
