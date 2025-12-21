import React, { Component } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
// import News from "./News";

export class Layout extends Component {
  render() {
    return (
      <div className="app-container">
        <Navbar title="NewsMonkey" />
        <main className="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
