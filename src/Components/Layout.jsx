import React, { Component } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import ThemeContext from "../Context/ThemeContext";

export class Layout extends Component {

  constructor() {
    super();
    this.state = {
      mode: "light",
    };
  }

  toggleMode = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "#330530";
    } else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
    }
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          mode: this.state.mode,
          toggleMode: this.toggleMode
        }}
      >
        <div className="app-container">
          <Navbar title="NewsMonkey" />
          <main className="main-content">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default Layout;
