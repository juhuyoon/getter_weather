import React, { Component } from "react";
import Navbar from "../Navbar";
import Content from "../Content";
import Footer from "../Footer";

export default class index extends Component {
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
