import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Image,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { Card, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class index extends Component {
  state = {
    search: ""
  };

  handleSearch(event) {
    const search = event.target.value;
    this.setState({ search });
    //import data
    //research .filter() and filter the data with the search.
    // const searchResults = data.filter(obj => obj.city == search)
    // set the state for search results
  }
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
        id="landing-page"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <p> Welcome to Getter Weather </p>
          </Header>
          <p>Here you will find the most accurate weather. </p>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                placeholder="City"
                value={this.state.search}
                onChange={event => this.handleSearch(event)}
              />
              <Button
                as={Link}
                to="/getterweather"
                color="blue"
                fluid
                size="medium"
              >
                Go
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}
