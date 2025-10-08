// src/components/shared/Header.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Gaming Club
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/members" className={getNavLinkClass}>
                Members
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/games" className={getNavLinkClass}>
                Games
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/recharges" className={getNavLinkClass}>
                Recharges
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/transactions" className={getNavLinkClass}>
                Transactions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/daily-collections" className={getNavLinkClass}>
                Daily Collections
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
