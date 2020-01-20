import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './header.css';

export default function Header() {
  const amountReserves = useSelector(state => state.booking.length);
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
}
