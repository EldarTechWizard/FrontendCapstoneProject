import React from "react";
import { ReactComponent as Logo } from "./Assets/logo.svg";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/Reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/Order-online">Order Online</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
