import React, { Component } from "react";
import Today from "../Content/Today";
import Tomorrow from "../Content/Tomorrow";
import ThisWeek from "./ThisWeek";
import NextWeek from "./NextWeek";

export default class index extends Component {
  render() {
    return (
      <div>
        <Today />
        <Tomorrow />
        <ThisWeek />
        <NextWeek />
      </div>
    );
  }
}
