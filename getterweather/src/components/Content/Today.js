import React, { Component } from "react";
import {
  Container,
  Header,
  Grid,
  Image,
  Segment,
  Icon,
  List
} from "semantic-ui-react";
import cloudyImage from "../../assets/images/icons/cloudy.png";
import rainImage from "../../assets/images/icons/rain.png";
import sleetImage from "../../assets/images/icons/sleet.png";
import snowImage from "../../assets/images/icons/snow.png";
import suncloudImage from "../../assets/images/icons/sun-cloud.png";
import sunnyImage from "../../assets/images/icons/sunny.png";
import thunderstormImage from "../../assets/images/icons/thunderstorm.png";

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: [],
      weatherData: ""
    };
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
                  Average <br />
                  <Header
                    style={{
                      fontFamily: '"Rubik Mono One", sans-serif',
                      color: "white",
                      textShadow:
                        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, -1px 1px 0 #000",
                      fontSize: "35px",
                      margin: 0,
                      paddingTop: "20px",
                      paddingBottom: "20px"
                    }}
                  >
                    68
                  </Header>
                  {/* <Header size="huge">Average: 88</Header> */}
                  {/* <Icon name="sun outline" size="huge" /> */}
                </div>
                <br />
                <List.Item as="a" className="card-content">
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
                    <List.Description>
                      {this.state.weatherData}
                    </List.Description>
                  </List.Content>
                </List.Item>
                <br />
                <Icon name="user" />
                <a
                  href="https://iq.swackett.com/app/web/engine"
                  target="_blank"
                >
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
                  <Header
                    style={{
                      fontFamily: '"Rubik Mono One", sans-serif',
                      color: "white",
                      textShadow:
                        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, -1px 1px 0 #000",
                      fontSize: "35px",
                      margin: 0
                    }}
                  >
                    88
                  </Header>
                  <Image src={sunnyImage} size="tiny" />
                  {/* <Icon name="sun outline" size="huge" /> */}
                </div>
                <br />
                <List.Item as="a" className="card-content">
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
                <div
                  style={{
                    fontSize: "11px"
                  }}
                >
                  Source pulled from: Dark Sky
                </div>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column style={{ opacity: "0.5" }}>
            <Segment>
              <List>
                <div className="cardHeaderTemp">
                  <Header
                    style={{
                      fontFamily: '"Rubik Mono One", sans-serif',
                      color: "white",
                      textShadow:
                        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, -1px 1px 0 #000",
                      fontSize: "35px",
                      margin: 0
                    }}
                  >
                    88
                  </Header>
                  <Image src={sleetImage} size="tiny" />
                </div>
                <br />
                <List.Item as="a" className="card-content">
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
                <div
                  style={{
                    fontSize: "11px"
                  }}
                >
                  Source pulled from: Open Weather Map
                </div>
              </List>
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <List>
                <div className="cardHeaderTemp">
                  <Header
                    style={{
                      fontFamily: '"Rubik Mono One", sans-serif',
                      color: "white",
                      textShadow:
                        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, -1px 1px 0 #000",
                      fontSize: "35px",
                      margin: 0
                    }}
                  >
                    88
                  </Header>
                  <Image src={thunderstormImage} size="tiny" />
                </div>
                <br />
                <List.Item as="a" className="card-content">
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
                <div
                  style={{
                    fontSize: "11px"
                  }}
                >
                  Source pulled from: AccuWeather
                </div>
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Today;
