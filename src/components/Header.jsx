import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = ({ selects, setSelects }) => {
  return (
    <div className="main">
      <div className="log">newsX</div>
      <div className="category">
        <select value={selects} onChange={(e) => setSelects(e.target.value)}>
          <option value="Business">Business</option>
          <option value="Technology">Technology</option>
          <option value="India">India</option>
        </select>
      </div>
      <div className="navbar">
        <nav>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            <button>Home</button>
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
            <button>About</button>
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
            <button>Contact</button>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
