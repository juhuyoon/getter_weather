import React, { Component } from "react";
import Navbar from "../Navbar";
import Content from "../Content";

export default class index extends Component {
  render() {
    return (
      <div id="mainWrapper">
        <Navbar />
        <Content />
      </div>
    );
  }
}
