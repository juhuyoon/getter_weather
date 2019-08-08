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
import AutoComplete from "../AutoCompleteInput/AutoComplete";

export default class index extends Component {
  state = {
    search: "",
    selectedOption: null
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
    const { selectedOption } = this.state;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        // verticalAlign="middle"
        id="landing-page"
      >
        <Grid.Column style={{ maxWidth: 600 }}>
          <Header
            style={{
              fontFamily: '"Rubik Mono One", sans-serif',
              color: "white",
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, -1px 1px 0 #000",
              fontSize: "35px",
              margin: 0,
              paddingBottom: "15px",
              paddingTop: "100px"
            }}
          >
            <p>Getter Weather </p>
          </Header>
          <div
            className="card-content"
            style={{
              fontSize: "20px",
              color: "white",
              paddingBottom: "15px"
            }}
          >
            A one look weather app that averages conditions from multiple
            sources, so you don't feel the need to double check.
          </div>
          <Form size="small">
            <Segment
              stacked
              style={{
                maxWidth: 250,
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px"
              }}
            >
              <AutoComplete />
              {/* <Form.Input
                placeholder="City"
                value={this.state.search}
                onChange={event => this.handleSearch(event)}
              /> */}
              <Button
                as={Link}
                to="/getterweather"
                color="yellow"
                fluid
                size="small"
                id="city-name-input"
              >
                Go
              </Button>
            </Segment>
          </Form>
          <div
            className="card-content"
            style={{
              fontSize: "15px",
              color: "white",
              paddingTop: "300px"
            }}
          >
            Proudly built using React.js by Tyler, Orion, and Gabriel
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}
