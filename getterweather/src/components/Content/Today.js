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
      tempmax: null,
      tempmin: null,
      city2: null,
      temp2max: null,
      temp2min: null,
      humidity2: null,
      city3: null,
      temp3: null,
      humidity3: null
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
       temp2max: response.main.temp_max,
       temp2min: response.main.temp_min,
       humidity2: response.main.humidity
     }));

     fetch("http://dataservice.accuweather.com/forecasts/v1/daily/1day/348181?apikey=aIM0XKfnNBCyI8Ya7Q5Shb1RYTpCL3Od")
     .then(response => response.json())
     .then( response => this.setState({
       city: "Atlanta",
       tempmax: response.DailyForecasts[0].Temperature.Maximum.Value,
       tempmin: response.DailyForecasts[0].Temperature.Minimum.Value
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
          <Segment>
            <List>
              <div className="cardHeaderTemp">
                <Header size="huge">Atlanta</Header>
                {/* <Icon name="sun outline" size="huge" /> */}
              </div>
              <br />
              <List.Item as="a">
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
                  AccuWeather
                </Header>
                <Icon name="sun outline" size="huge" />
              </div>
              <br />
              <List.Item as="a">
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
              <div>Source pulled from: AccuWeather</div>
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <List>
              <div className="cardHeaderTemp">
                <Header size="huge" style={{ margin: 0 }}>
                  OpenWeatherMap
                </Header>
                <Icon name="sun outline" size="huge" />
              </div>
              <br />
              <List.Item as="a">
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
                  APIxu
                </Header>
                <Icon name="sun outline" size="huge" />
              </div>
              <br />
              <List.Item as="a">
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
