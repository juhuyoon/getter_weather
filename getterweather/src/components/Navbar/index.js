import React, { Component } from "react";

// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from "reactstrap";
// import {
//   Col,
//   Row,
//   Button,
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   FormText
// } from "reactstrap";
import { Menu, Segment } from "semantic-ui-react";
import { Form, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../Navbar/navbar.css";
import AutoComplete from "../AutoCompleteInput/AutoComplete";

// export default class Navigation extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
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
              className="navbar-title"
            />

            <Menu.Item
              name="Today"
              href="#today"
              active={activeItem === "today"}
              onClick={this.handleItemClick}
              className="navbar-titles"
            />
            <Menu.Item
              name="Tomorrow"
              href="#tomorrow"
              active={activeItem === "tomorrow"}
              onClick={this.handleItemClick}
              className="navbar-titles"
            />
            <Menu.Item position="right">
              <Input
                action={{ type: "submit", content: "Go" }}
                placeholder="City Name"
                className="navbar-titles"
                id="city-name-input"
              />
            </Menu.Item>
            {/* <AutoComplete /> */}
          </Menu>
        </Segment>
      </div>
    );
  }
}

// <div>
//   <Navbar color="light" light expand="md" fixed="top">
//     <NavbarBrand href="/">Getter Weather</NavbarBrand>
//     <NavbarToggler onClick={this.toggle} />
//     <Form>
//       {/* <Col md={2}> */}
//       <FormGroup>
//         <Label for="exampleZip">Zip</Label>
//         <Input type="text" name="zip" id="exampleZip" />
//       </FormGroup>
//       <Button>Enter</Button>
//       {/* </Col> */}
//     </Form>

//     <Collapse isOpen={this.state.isOpen} navbar>
//       <Nav className="ml-auto" navbar>
//         <NavItem>
//           <NavLink href="/components/">Today</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="/components/">Tomorrow</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="/components/">This Week</NavLink>
//         </NavItem>
//         <NavItem>
//           <NavLink href="/components/">Next Week</NavLink>
//         </NavItem>
//         <UncontrolledDropdown nav inNavbar>
//           <DropdownToggle nav caret>
//             Options
//           </DropdownToggle>
//           <DropdownMenu right>
//             <DropdownItem>Option 1</DropdownItem>
//             <DropdownItem>Option 2</DropdownItem>
//             <DropdownItem divider />
//             <DropdownItem>Reset</DropdownItem>
//           </DropdownMenu>
//         </UncontrolledDropdown>
//       </Nav>
//     </Collapse>
//   </Navbar>
// </div>
