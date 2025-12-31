import React, { Component } from "react";
import LoadingBar from "react-top-loading-bar";
import ThemeContext from "../Context/ThemeContext";

export class TopLoader extends Component {
  static contextType = ThemeContext;

  render() {
    const { progress, setProgress, mode } = this.context;
    return (
      <LoadingBar
        color={ mode === 'dark' ? "#188755" : "#f11946"}
        progress={progress}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />
    );
  }
}

export default TopLoader;
