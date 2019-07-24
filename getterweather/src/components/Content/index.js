import React, { Component } from "react";
import Today from "../Content/Today";
import Tomorrow from "../Content/Tomorrow";
import Week1 from "../Content/Week1";
import Week2 from "./Week2";

export default class index extends Component {
  render() {
    return (
      <div>
        <Today />
        <Tomorrow />
        <Week1 />
        <Week2 />
      </div>
    );
  }
}
