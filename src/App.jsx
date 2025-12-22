import "./App.css";
import React, { Component } from "react";
import News from "./Components/News";

export class App extends Component {
  render() {
    return (
      <>
        <News pageSize="8" category="general"/>
      </>
    );
  }
}

export default App;
