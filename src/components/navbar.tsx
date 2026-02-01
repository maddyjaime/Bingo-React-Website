// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="navbar-title-link" to="/"> Bingo Home </NavLink>

      <ul className="navbar-ul-links">
        <li>
          <NavLink className="navbar-link" to="/overall-items">Overall Items</NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/card-1">Card #1</NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/card-2">Card #2</NavLink>
        </li>
      </ul>
    </nav>
  );
}
