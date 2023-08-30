import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './navBar.css'

function NavBar({resetScreen}) {
  return (
    <nav>
      <ul>
        <li className='left' onClick={resetScreen}><NavLink to="/">Home</NavLink></li>
        <li onClick={resetScreen}><NavLink to="/showCase">Projects</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavBar;