import React from "react";
import {
  Header,
  Grid,
  Image,
  Segment,
  Icon,
  List,
  Container
} from "semantic-ui-react";
import cloudyImage from "../../assets/images/icons/cloudy.png";
import rainImage from "../../assets/images/icons/rain.png";
import sleetImage from "../../assets/images/icons/sleet.png";
import snowImage from "../../assets/images/icons/snow.png";
import suncloudImage from "../../assets/images/icons/sun-cloud.png";
import sunnyImage from "../../assets/images/icons/sunny.png";
import thunderstormImage from "../../assets/images/icons/thunderstorm.png";

const Tomorrow = props => {
  return (
    <div id="tomorrow" className="tomorrow-gradient">
      <Header
        as="h1"
        className="main-content-title"
        style={{ margin: "40px 0 60px" }}
      >
        Tomorrow
      </Header>

      <Grid relaxed="very" columns={4} padded centered>
        <Grid.Column>
          <Segment style={{ background: "rgba(255, 255, 255, 0.7)" }}>
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
                  84
                </Header>
                <Image src={suncloudImage} size="tiny" />
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
                className="card-content"
                style={{
                  fontSize: "11px"
                }}
              >
                Source pulled from: ie Dark Sky
              </div>
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment style={{ background: "rgba(255, 255, 255, 0.7)" }}>
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
                <Image src={rainImage} size="tiny" />
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
                className="card-content"
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
          <Segment style={{ background: "rgba(255, 255, 255, 0.7)" }}>
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
                  {" "}
                  88
                </Header>
                <Image src={sunnyImage} size="tiny" />
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
                className="card-content"
                style={{
                  fontSize: "11px"
                }}
              >
                Source pulled from: AccuWeather
              </div>
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment style={{ background: "rgba(255, 255, 255, 0.7)" }}>
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
                  92
                </Header>
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
              <Icon name="user" />
              <a href="https://iq.swackett.com/app/web/engine" target="_blank">
                {/* change icon and send to new tab */}
                What should I wear?
              </a>
              <br />
            </List>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Tomorrow;
