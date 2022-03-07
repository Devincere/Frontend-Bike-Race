import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-dark sticked-bottom text-center">
    <div className="container-fluid justify-content-center">
      <div className="row">
        <div className="col-12 nav-footer">
          <ul className="navbar-nav justify-content-center">
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
        <div className="col-12 copyrights text-center">© Copyrights</div>
      </div>
    </div>
  </nav>
);

export default Footer;
