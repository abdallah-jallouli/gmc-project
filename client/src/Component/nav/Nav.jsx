import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../images/logo.png';
import './nav.css';
import { Link } from 'react-router-dom';
import { Box } from '@chakra-ui/react';


const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Box
      bg="#042c54" // Use the dark background color from your custom theme
      color="white"   // Text color for the navbar
      p={4}           // Padding
    >
      <div className="wealth__navbar">
      <div className="wealth__navbar-links">
        <div className="wealth__navbar-links_logo">
          <img src={logo} alt='logo' />
        </div>
        <div className="wealth__navbar-links_container">
          <Link to="/"><p>Home</p></Link>
          <p><a href="#rent">Rent</a></p>
          <p><a href="#sell">Sell</a></p>
          <p><a href="#buy">Buy</a></p>
          <p><a href="#about">About</a></p>
        </div>
      </div>
      <div className="wealth__navbar-sign">
        <Link to="/Login"><p>Login</p></Link>
        <Link to="/SignUp"><button type="button">Sign up</button></Link>
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
          <Link to="/Login">LogIn</Link>
          <Link to="/SignUp">Sign Up</Link>
          </div>
        </div>
        )}
      </div>
    </div>
    </Box>
    
  )
}

export default Nav

