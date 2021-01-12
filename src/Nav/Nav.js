import './Nav.css';
import React from "react";
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: '#fff',
        textDecoration: 'none'
    }

  return (
    <nav className="navigation">
            <Link style={navStyle} to="/coronavirus-map">
            <h4>Coronavirus</h4>
                </Link>
            <ul className="nav-links">
                <Link style={navStyle} to="/states">
                    <li>United states</li>
                </Link>
                <Link style={navStyle} to="/europe">
                    <li>Europe</li>
                </Link>
            </ul>
        </nav>
  );
}

export default Nav;