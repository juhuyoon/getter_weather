import React, { Component } from "react";
import Day1 from "../Content/Day1";
import Day3 from "../Content/Day3";
import Week1 from "../Content/Week1";
import Week3 from "../Content/Week3";

export default class index extends Component {
  render() {
    return (
      <div>
        <Day1 />
        <Day3 />
        <Week1 />
        <Week3 />
      </div>
    );
  }
}
