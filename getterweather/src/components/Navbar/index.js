import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Form, Input } from "semantic-ui-react";
import "../Navbar/navbar.css";

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu fixed pointing secondary>
          <Menu.Item
            name="Getter Weather"
            active={activeItem === "getter weather"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Today"
            active={activeItem === "today"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Tomorrow"
            active={activeItem === "tomorrow"}
            onClick={this.handleItemClick}
          />
          <Menu.Item position="right">
            <Input
              action={{ type: "submit", content: "Go" }}
              placeholder="City Name"
            />
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}
