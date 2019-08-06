import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";
import { Form, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../Navbar/navbar.css";
import AutoComplete from "../AutoCompleteInput/AutoComplete";

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div style={{}}>
        <Segment inverted>
          <Menu fixed pointing secondary>
            <Menu.Item
              as={Link}
              to="/"
              name="Getter Weather"
              active={activeItem === "getter weather"}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              name="Today"
              href="#today"
              active={activeItem === "today"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Tomorrow"
              href="#tomorrow"
              active={activeItem === "tomorrow"}
              onClick={this.handleItemClick}
            />
            <Menu.Item position="right">
              <Input
                action={{ type: "submit", content: "Go" }}
                placeholder="City Name"
              />
            </Menu.Item>
            {/* <AutoComplete /> */}
          </Menu>
        </Segment>
      </div>
    );
  }
}
