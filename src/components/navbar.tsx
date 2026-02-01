// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">My App</h2>

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
