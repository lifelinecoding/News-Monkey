import React, { Component } from "react";
import ThemeContext from "../Context/ThemeContext";

export class Spinner extends Component {
  static contextType = ThemeContext;
  render() {
    const { mode } = this.context;
    return (
      <div className="d-flex justify-content-center my-3">
      <div className={`spinner-border text-${mode === "dark" ? "success" : "danger"}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    );
  }
}

export default Spinner;
