import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú de hamburguesa

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      {isMobile ? (
        <>
          <button className="hamburger-menu" onClick={toggleMenu} style={ { backgroundColor: "transparent" }          }>
            {isOpen ? <>&#10005;</> : <>&#9776;</>}
          </button>
          {isOpen && (
            <div className="mobile-menu">
              <ul>
                <li>
                  <Link to="/" onClick={toggleMenu}>INICIO</Link>
                </li>
                <li>
                  <Link to="/identidadqenqo" onClick={toggleMenu}>IDENTIDAD QENQO</Link>
                </li>
                <li>
                  <Link to="/servicios" onClick={toggleMenu}>SERVICIOS</Link>
                </li>
                <li>
                  <Link to="#testimonios" onClick={toggleMenu}>TESTIMONIOS</Link>
                </li>
                <li>
                  <Link to="#contacto" onClick={toggleMenu}>CONTACTO</Link>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
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
      )}
    </div>
  );
}

export default Navbar;
