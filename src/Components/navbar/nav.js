import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => (
  <nav
    className="navbar navbar-expand-lg navbar-dark fixed-top"
    id="top-navbar"
  >
    <div className="container-fluid">
      <a className="navbar-brand" href="/">
        <img
          src="/img/bike-race-logo.png"
          alt="logo"
          width="40"
          height="24"
          className="d-inline-block align-text-top logo-bike-nav"
        />
        
        <span className="title-navbar">Hell's Mountains Race</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarTogglerDemo02"
      >
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/riders" className="nav-link">
              Riders
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/gallery" className="nav-link">
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/map" className="nav-link">
              Interactive Map
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/slogan" className="nav-link">
              Submit your slogan
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Nav;
