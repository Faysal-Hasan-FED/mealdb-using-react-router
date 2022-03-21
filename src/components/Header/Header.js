import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const style={
        backgroundColor:'black',
        lineHeight:'40px',
        textAlign:'center'
    }
    return (
        <nav style={style}>

        <NavLink to="home"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              marginRight: isActive ? '25px' : '25px',
              textDecoration: isActive ? 'none' : 'none', 
              fontWeight: isActive ? 'bold' : 'bold'
            })}>Home</NavLink>

        <NavLink to="meals"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              marginRight: isActive ? '25px' : '25px',
              textDecoration: isActive ? 'none' : 'none', 
              fontWeight: isActive ? 'bold' : 'bold'
            })}>Meals</NavLink>

        <NavLink to="about"
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'white',
              marginRight: isActive ? '25px' : '25px',
              textDecoration: isActive ? 'none' : 'none', 
              fontWeight: isActive ? 'bold' : 'bold'
            })}>About us</NavLink>
            
        </nav>
    );
};

export default Header;