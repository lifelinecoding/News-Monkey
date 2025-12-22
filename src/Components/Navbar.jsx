import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    let { title } = this.props;
    return (
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-light fw-bold" to="/">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link text-light"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  Technology  
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/about">
                  Science
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
