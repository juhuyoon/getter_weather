import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content/index";
import Footer from "./components/Footer/index";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}
