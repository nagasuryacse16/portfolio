import React, { useState } from 'react';
import './Navbar.css';
import {Link, NavLink} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import {FaBars, FaTimes} from 'react-icons/fa';
import MyPhoto from '../Assets/nagasurya.jpeg';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor=()=>{
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "nav nav__bg" : 'nav'}> 
            <div className='nav__profile'>
                <Link to="/about">
                    <Avatar
                        className='header__avatar' 
                        alt="Nagasurya"
                        src={MyPhoto}
                    />
                </Link>    
                <Link to="/">
                    <h1>Portfolio</h1>
                </Link>
            </div>
            <ul className={click ? 'nav__menu active' : 'nav__menu'}>
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/Project" className={({ isActive }) => (isActive ? "link-active" : "link")}>Project</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "link-active" : "link")}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "link-active" : "link")}>About</NavLink>
                </li>
            </ul>

            <div className='nav__hamburger' onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{color: "#fff"}}/>
                ) : (    
                <FaBars size={20} style={{color: "#fff"}}/>
                )}
            </div>
        </div>    
     );
}

export default Navbar;