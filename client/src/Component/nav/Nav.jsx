import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="wealth__navbar">
      <div className="wealth__navbar-links">
        <div className="wealth__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="wealth__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#rent">Rent</a></p>
          <p><a href="#sell">Sell</a></p>
          <p><a href="#buy">Buy</a></p>
          <p><a href="#about">About</a></p>
        </div>
      </div>
      <div className="wealth__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="wealth__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="wealth__navbar-menu_container scale-up-center">
          <div className="wealth__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#rent">Rent</a></p>
            <p><a href="#sell">Sell</a></p>
            <p><a href="#buy">Buy</a></p>
            <p><a href="#about">About</a></p>
          </div>
          <div className="wealth__navbar-menu_container-links-sign">
          <Link to="/SignUp">Sign In</Link>
          <Link to="/SignUp">Sign Up</Link>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Nav

