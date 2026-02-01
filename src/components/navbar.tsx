// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";

import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) =>
          isActive ? "navbar-link navbar-link-active" : "navbar-link"
        } > Bingo Home </NavLink>

      <ul className="navbar-ul-links">
        <li>
          <NavLink to="/overall-items" className="navbar-link" >Overall Items</NavLink>
        </li>
        <li>
          <NavLink to="/card-1" className="navbar-link">Card #1</NavLink>
        </li>
        <li>
          <NavLink to="/card-2" className="navbar-link">Card #2</NavLink>
        </li>
      </ul>
    </nav>
  );
}
