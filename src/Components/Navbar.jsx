import React, { Component } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../Context/ThemeContext";

export class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    let { title,} = this.props;
    const { mode, toggleMode } = this.context;
    return (
      <nav className={"navbar navbar-expand-lg fixed-top " + (mode === "dark" ? "bg-dark" : "bg-secondary")}>
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
                <Link className="nav-link text-light" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/science">
                  Science
                </Link>
              </li>
            </ul>
          </div>
          <div class="form-check form-switch">
            <input
              className="form-check-input mx-3"
              type="checkbox"
              role="switch"
              id="switchCheckChecked"
              onClick={toggleMode}
              style={{
                height: "20px",
                width: "40px",
                }}
                checked = {mode === 'dark'? true:false}
            />
            <label className={`form-check-label ${"text-light"}`} htmlFor="switchCheckChecked">
              {mode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
            </label>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
