import React from 'react';
import App from "./App.css";
import {Link} from "react-router-dom";



function Navigation() {
    const navStyle = {
        color:"white",
        textDecoration: "none"
    }

  return (
    <nav className="nav">
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link style={navStyle} to="/about">
                <li>About</li>
            </Link>
            <Link style={navStyle} to="/shop">
                <li>Shop</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Navigation;
