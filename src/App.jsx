import "./App.css";
import React, { Component } from "react";
import News from "./Components/News";

export class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress });
  };

  render() {
    return (
      <>
        <News pageSize="8" category="general" apiKey={this.apiKey} />
      </>
    );
  }
}

export default App;
