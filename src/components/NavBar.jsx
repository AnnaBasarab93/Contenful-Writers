import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
    <nav className='navB'>
    
        <NavLink to="/" className='navChild'>Home</NavLink>
        <NavLink to="/about" className='navChild'>About Us</NavLink>
    </nav>
    );
   };


export default NavBar