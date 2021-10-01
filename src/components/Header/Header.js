import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={Logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory here</NavLink>
            </nav>
        </div>
    );
};

export default Header;