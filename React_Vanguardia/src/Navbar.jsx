// src/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Aplicación
        </NavLink>
        <div className="nav__menu-container">
          <div
            className={`nav__menu ${showMenu ? 'show-menu' : ''}`}
            id="nav-menu"
          >
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
                  Inicio
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/about" className="nav__link" onClick={closeMenuOnMobile}>
                  Sobre
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/inventario" className="nav__link" onClick={closeMenuOnMobile}>
                  Inventario
                </NavLink>
              </li>
            </ul>
            <button className="nav__close" onClick={toggleMenu}>
              <IoClose />
            </button>
          </div>
          <button className="nav__toggle" onClick={toggleMenu}>
            <IoMenu />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
