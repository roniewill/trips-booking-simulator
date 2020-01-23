import React from 'react';

import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ amountReserves }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/">
          <h1 className="navbar-brand">TRIPS</h1>
        </Link>
        <Link to="/booking">
          Reservas
          <span>{amountReserves}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
