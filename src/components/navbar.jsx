import React from "react";
import "../styles/navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/identidadqenqo">IDENTIDAD QENQO</Link>
          </li>
          <li>
            <Link to="/servicios">SERVICIOS</Link>
          </li>
          <li>
            <Link to="#testimonios">TESTIMONIOS</Link>
          </li>
          <li>
            <Link to="#contacto">CONTACTO</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
