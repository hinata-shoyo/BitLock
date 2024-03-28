import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

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
          <p><a href="#details">DETAILS</a></p>
          <p><a href="#storage">STORAGE</a></p>
          <p><a href="#footer">CONTACT</a></p>
        </div>
      </div>
      <div className="bit__navbar-sign">
        <button type="button">Log Out</button>
      </div>
      <div className="bit__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="bit__navbar-menu_container scale-up-center">
          <div className="bit__navbar-menu_container-links">
            <p><a href="#home">HOME</a></p>
            <p><a href="#details">DETAILS</a></p>
            <p><a href="#storage">STORAGE</a></p>
            <p><a href="#footer">CONTACT</a></p>
          </div>
          <div className="bit__navbar-menu_container-links-sign">
            <button type="button">Log Out</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
