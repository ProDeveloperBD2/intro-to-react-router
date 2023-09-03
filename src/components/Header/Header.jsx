import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/about">About us</ActiveLink>
            <ActiveLink to="/service">Service</ActiveLink>
            <ActiveLink to="/contact">Contact us</ActiveLink>
        </nav>
    );
};

export default Header;