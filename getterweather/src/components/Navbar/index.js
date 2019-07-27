import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
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
          <Menu.Item
            name="This Week"
            active={activeItem === "thisweek"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Next Week"
            active={activeItem === "nextweek"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}
