import React, { Component } from "react";
import Today from "../Content/Today";
import Tomorrow from "../Content/Tomorrow";

export default class index extends Component {
  render() {
    return (
      <div>
        <Today />
        <Tomorrow />
      </div>
    );
  }
}
