import "./App.css";
import React, { Component } from "react";
import News from "./Components/News";
import ThemeContext from "./Context/ThemeContext";

export class App extends Component {
  static contextType = ThemeContext;
  render() {
    const { mode } = this.context;
    return (
      <>
        <News pageSize="8" category="general" mode={mode} />
      </>
    );
  }
}

export default App;
