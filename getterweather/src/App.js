import React, { Component } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import Mainpage from "./components/Mainpage";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          {/* switch and route are coming from react-router and depending on path it changes whats rendered */}
          <Route exact path="/getterweather" render={() => <Mainpage />} />
          <Route exact path="/" render={() => <LandingPage />} />
        </Switch>
      </div>
    );
  }
}
