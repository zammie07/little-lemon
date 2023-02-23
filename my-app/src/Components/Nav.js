import React from "react";

function Nav() {
  return (
    <nav className="navbar">
      <img src="images/Logo.svg" alt="logo" className="lemon-logo" />
      <ul className="nav-item">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>

        <li>
          <a href="/menu">Menu</a>
        </li>

        <li>
          <a href="/reservations">Reservations</a>
        </li>

        <li>
          <a href="/reservations">Reservations</a>
        </li>

        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
