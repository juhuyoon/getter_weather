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
    this.state= {
      city: null,
      tempmax: null,
      tempmin: null,
      city2: null,
      temp2max: null,
      temp2min: null,
      humidity2: null,
      city3: null,
      temp3: null,
      humidity3: null,
      openFeelslike: null,
      accuFeelslike: null
    };
  };

  componentDidMount() {
    fetch("http://api.apixu.com/v1/current.json?key=9a6d1cab9e4a4f8f8d4230629191807&q=Atlanta")
    .then(response => response.json())
    .then(response => this.setState({ 
      city3: response.location.name,
      temp3: response.current.temp_f,
      humidity3: response.current.humidity,
      precipitation3: response.current.precip_in
     }));

     fetch("http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=0df9f64365060ae81c16eb4855a81df7")
     .then(response => response.json())
     .then(response => this.setState({
       city2: response.name,
       openFeelslike: response.main.temp,
       temp2max: response.main.temp_max,
       temp2min: response.main.temp_min,
       humidity2: response.main.humidity
     }));

     fetch("http://dataservice.accuweather.com/forecasts/v1/daily/1day/348181?apikey=aIM0XKfnNBCyI8Ya7Q5Shb1RYTpCL3Od")
     .then(response => response.json())
     .then( response => this.setState({
       city: "Atlanta",
       tempmax: response.DailyForecasts[0].Temperature.Maximum.Value,
       tempmin: response.DailyForecasts[0].Temperature.Minimum.Value,
       accuFeelslike: (((response.DailyForecasts[0].Temperature.Maximum.Value) + (response.DailyForecasts[0].Temperature.Minimum.Value))/2),
     }));
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
                    88.35
                  </Header>
              </div>
              <br />
              <List.Item as="a" className="card-content">
                <Icon name="arrow up" />
                <List.Content>
                  <List.Header>High</List.Header>
                  <List.Description>
                  {(this.state.temp2max + this.state.temp3) / 2}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="arrow down" />
                <List.Content>
                  <List.Header>Low</List.Header>
                  <List.Description>
                    {this.state.temp2min}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="h" />
                <List.Content>
                  <List.Header>Humidity</List.Header>
                  <List.Description>{(this.state.humidity2 + this.state.humidity3) / 2}</List.Description>
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
              <a href="https://iq.swackett.com/app/web/engine" target="_blank">
                {/* change icon and send to new tab */}
                What should I wear?
              </a>
              <br />
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
                    {this.state.temp3}
                  </Header>
                  <Image src={sunnyImage} size="tiny" />
              </div>
              <br />
              <List.Item as="a" className="card-content">
                <Icon name="arrow up" />
                <List.Content>
                  <List.Header>High</List.Header>
                  <List.Description>
                  {this.state.tempmax}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="arrow down" />
                <List.Content>
                  <List.Header>Low</List.Header>
                  <List.Description>
                  {this.state.tempmin}
                  </List.Description>
                </List.Content>
              </List.Item>
              <br />
              <div
                  style={{
                    fontSize: "11px"
                  }}
                >
                  Source pulled from: Apixu
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
                    {this.state.openFeelslike}
                  </Header>
                  <Image src={suncloudImage} size="tiny" />
              </div>
              <br />
              <List.Item as="a" className="card-content">
                <Icon name="arrow up" />
                <List.Content>
                  <List.Header>High</List.Header>
                  <List.Description>
                  {this.state.temp2max}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="arrow down" />
                <List.Content>
                  <List.Header>Low</List.Header>
                  <List.Description>
                  {this.state.temp2min}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="h" />
                <List.Content>
                  <List.Header>Humidity</List.Header>
                  <List.Description>{this.state.humidity2}</List.Description>
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
                   {this.state.accuFeelslike}
                  </Header>
                  <Image src={suncloudImage} size="tiny" />
              </div>
              <br />
              <List.Item as="a" className="card-content">
                <Icon name="arrow up" />
                <List.Content>
                  <List.Header>Fahrenheit</List.Header>
                  <List.Description>
                    {this.state.temp3}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="h" />
                <List.Content>
                  <List.Header>Humidity</List.Header>
                  <List.Description>{this.state.humidity3}</List.Description>
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
};
export default Today;
