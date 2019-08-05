import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Mainpage from "./components/Mainpage";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Mainpage />
        <LandingPage />
      </div>
    );
  }
}
