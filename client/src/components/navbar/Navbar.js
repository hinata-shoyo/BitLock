import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="bit__navbar">
      <div className="bit__navbar-links">
        <div className="bit__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="bit__navbar-links_container">
          <p><a href="#home">HOME</a></p>
          <p><a href="#wbit">WHAT IS BITLOCK ?</a></p>
          <p><a href="#features">FEATURES</a></p>
          <p><a href="#footer">CONTACT</a></p>
        </div>
      </div>
      <div className="bit__navbar-sign">
        <Link to="/signin">
        <p>Sign in</p>
        </Link>
        <Link to="/signup">
        <button type="button">Sign up</button>
        </Link>
      </div>
      <div className="bit__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="bit__navbar-menu_container scale-up-center">
          <div className="bit__navbar-menu_container-links">
            <p><a href="#home">HOME</a></p>
            <p><a href="#wbit">WHAT IS BITLOCK ?</a></p>
            <p><a href="#features">FEATURES</a></p>
            <p><a href="#footer">CONTACT</a></p>
          </div>
          <div className="bit__navbar-menu_container-links-sign">
            <Link to="/signin">
            <p>Sign in</p>
            </Link>
            <Link to="/signup">
            <button type="button">Sign up</button>
            </Link>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
