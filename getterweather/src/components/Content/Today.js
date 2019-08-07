import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Header, Grid, Image, Segment, Icon, List, Card } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import axios from "axios";
class Today extends Component {
  constructor(props) {
    super(props);
    this.state= {
      city: null,
      temp: null
    };
  };
  componentDidMount() {
    fetch("http://api.apixu.com/v1/current.json?key=9a6d1cab9e4a4f8f8d4230629191807&q=Atlanta")
    .then(response => response.json())
    .then(response => this.setState({ 
      city: response.location.name,
      temp: response.current.temp_f,
     }))
}
  render() {
  return (
    <div id="today" className="today-gradient">
      <Header
        as="h1"
        className="main-content-title"
        style={{ margin: "40px 0 60px" }}
      >
        Today
      </Header>

      <Grid relaxed="very" columns={4} padded centered>
        <Grid.Column>
          <Segment>
            <List>
              <div className="cardHeaderTemp">
                <Header size="huge">{this.state.city}</Header>
                {/* <Icon name="sun outline" size="huge" /> */}
              </div>
              <br />
              <List.Item as="a">
                <Icon name="arrow up" />
                <List.Content>
                  <List.Header>High</List.Header>
                  <List.Description>
                    Insert the high temperature here
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="arrow down" />
                <List.Content>
                  <List.Header>Low</List.Header>
                  <List.Description>
                    Insert the low temperature here
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="h" />
                <List.Content>
                  <List.Header>Humidity</List.Header>
                  <List.Description>example</List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="product hunt" />
                <List.Content>
                  <List.Header>Precipitation</List.Header>
                  <List.Description>example</List.Description>
                </List.Content>
              </List.Item>
              <Icon name="user" />
              <a href="https://iq.swackett.com/app/web/engine" target="_blank">
                {/* change icon and send to new tab */}
                What should I wear?
              </a>
              <br />
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <List>
              <div className="cardHeaderTemp">
                <Header size="huge" style={{ margin: 0 }}>
                  88
                </Header>
                <Icon name="sun outline" size="huge" />
              </div>
              <br />
              <List.Item as="a">
                <Icon name="arrow up" />
                <List.Content>
                  <List.Header>High</List.Header>
                  <List.Description>
                    Insert the high temperature here
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="arrow down" />
                <List.Content>
                  <List.Header>Low</List.Header>
                  <List.Description>
                    Insert the low temperature here
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="h" />
                <List.Content>
                  <List.Header>Humidity</List.Header>
                  <List.Description>example</List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="product hunt" />
                <List.Content>
                  <List.Header>Precipitation</List.Header>
                  <List.Description>example</List.Description>
                </List.Content>
              </List.Item>
              <br />
              <div>Source pulled from: Dark Sky</div>
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <List>
              <div className="cardHeaderTemp">
                <Header size="huge" style={{ margin: 0 }}>
                  88
                </Header>
                <Icon name="sun outline" size="huge" />
              </div>
              <br />
              <List.Item as="a">
                <Icon name="arrow up" />
                <List.Content>
                  <List.Header>High</List.Header>
                  <List.Description>
                    Insert the high temperature here
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="arrow down" />
                <List.Content>
                  <List.Header>Low</List.Header>
                  <List.Description>
                    Insert the low temperature here
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="h" />
                <List.Content>
                  <List.Header>Humidity</List.Header>
                  <List.Description>example</List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="product hunt" />
                <List.Content>
                  <List.Header>Precipitation</List.Header>
                  <List.Description>example</List.Description>
                </List.Content>
              </List.Item>
              <br />
              <div>Source pulled from: Open Weather Map</div>
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <List>
              <div className="cardHeaderTemp">
                <Header size="huge" style={{ margin: 0 }}>
                  88
                </Header>
                <Icon name="sun outline" size="huge" />
              </div>
              <br />
              <List.Item as="a">
                <Icon name="arrow up" />
                <List.Content>
                  <List.Header>High</List.Header>
                  <List.Description>
                    Insert the high temperature here
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="arrow down" />
                <List.Content>
                  <List.Header>Low</List.Header>
                  <List.Description>
                    Insert the low temperature here
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="h" />
                <List.Content>
                  <List.Header>Humidity</List.Header>
                  <List.Description>example</List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="product hunt" />
                <List.Content>
                  <List.Header>Precipitation</List.Header>
                  <List.Description>example</List.Description>
                </List.Content>
              </List.Item>
              <br />
              <div>Source pulled from: Apixu</div>
            </List>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
 }
};

export default Today;
