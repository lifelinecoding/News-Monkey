import React, { Component } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
// import News from "./News";

export class Layout extends Component {
  render() {
    return (
      <>
        <Navbar
          title="NewsMonkey"
        />
        <Outlet />
      </>
    );
  }
}

export default Layout;
