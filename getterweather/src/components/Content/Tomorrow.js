import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Header, Grid, Image, Segment, Icon, List, Card } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import axios from "axios";
var  accuUrl = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/348181?apikey=aIM0XKfnNBCyI8Ya7Q5Shb1RYTpCL3Od';
var  apixuUrl = 'http://api.apixu.com/v1/current.json?key=9a6d1cab9e4a4f8f8d4230629191807&q=Atlanta';
var openUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&appid=0df9f64365060ae81c16eb4855a81df7';

class Tomorrow extends Component {
  constructor(props) {
    super(props);
    this.state= {
      accuCity: null,
      accuHigh: null,
      accuLow: null,
      accuHumidity: null,
      accuPrecipitation: null,
      apixuCity: null,
      apixuFeelslike: null,
      apixuHigh: null,
      apixuLow: null,
      apixuHumidity: null,
      apixuPrecipitation: null,
      openCity: null,
      openTemp: null,
      openHigh: null,
      openLow: null,
      openHumidity: null,
      openPrecipitation: null,
      openFeelslike: null
    };
  };

  componentDidMount() {
    Promise.all([fetch(accuUrl), fetch(apixuUrl), fetch(openUrl)])

      .then(([res1, res2, res3]) => { 
         return Promise.all([res1.json(), res2.json(), res3.json()]) 
      })
      .then(([res1, res2, res3]) => this.setState({
          accuCity: res1,
          accuHigh: res1.DailyForecasts[0].Temperature.Maximum.Value,
          accuLow: res1.DailyForecasts[0].Temperature.Minimum.Value,
          accuHumidity: res1,
          accuPrecipitation: res1.Headline.Text,
          accuFeelslike: (((res1.DailyForecasts[0].Temperature.Maximum.Value) + (res1.DailyForecasts[0].Temperature.Minimum.Value))/2),
          apixuCity: res2.location.name,
          apixuHigh: res2.current.temp_f,
          apixuLow: ((res2.current.temp_f) - 10),
          apixuHumidity: res2.current.humidity,
          apixuPrecipitation: res2.current.condition.text,
          apixuFeelslike: res2.current.feelslike_f,
          openCity: res3.name,
          openTemp: res3.main.temp,
          openHigh: res3.main.temp_max,
          openLow: res3.main.temp_min,
          openHumidity: res3.main.humidity,
          openPrecipitation: res3.weather[0].main,
          openFeelslike: res3.main.temp,
          avgTemp: ((((((res1.DailyForecasts[0].Temperature.Maximum.Value) + (res1.DailyForecasts[0].Temperature.Minimum.Value))/2)) + (res2.current.feelslike_f) + (res3.main.temp))/3)

      }));

}
  render () {
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
          <Segment>
            <List>
              <div className="cardHeaderTemp">
                <Header size="huge">{this.state.accuFeelslike}</Header>
                <Icon name="sun outline" size="huge" />
              </div>
              <br />
              <List.Item as="a">
                <Icon name="arrow up" />
                <List.Content>
                  <List.Header>High</List.Header>
                  <List.Description>
                    {this.state.accuHigh}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="arrow down" />
                <List.Content>
                  <List.Header>Low</List.Header>
                  <List.Description>
                     {this.state.accuLow}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="h" />
                <List.Content>
                  <List.Header>Humidity</List.Header>
                  <List.Description>{this.state.openHumidity}</List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="product hunt" />
                <List.Content>
                  <List.Header>Precipitation</List.Header>
                  <List.Description>{this.state.accuPrecipitation}</List.Description>
                </List.Content>
              </List.Item>
              <br />
              <div>Source: AccuWeather</div>
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <List>
              <div className="cardHeaderTemp">
                <Header size="huge" style={{ margin: 0 }}>
                  {this.state.openFeelslike}
                </Header>
                <Icon name="sun outline" size="huge" />
              </div>
              <br />
              <List.Item as="a">
                <Icon name="arrow up" />
                <List.Content>
                  <List.Header>High</List.Header>
                  <List.Description>
                    {this.state.openHigh}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="arrow down" />
                <List.Content>
                  <List.Header>Low</List.Header>
                  <List.Description>
                    {this.state.openLow}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="h" />
                <List.Content>
                  <List.Header>Humidity</List.Header>
                  <List.Description>{this.state.openHumidity}</List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="product hunt" />
                <List.Content>
                  <List.Header>Precipitation</List.Header>
                  <List.Description>{this.state.openPrecipitation}</List.Description>
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
                  {this.state.apixuFeelslike}
                </Header>
                <Icon name="sun outline" size="huge" />
              </div>
              <br />
              <List.Item as="a">
                <Icon name="arrow up" />
                <List.Content>
                  <List.Header>High</List.Header>
                  <List.Description>
                    {this.state.apixuHigh}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="arrow down" />
                <List.Content>
                  <List.Header>Low</List.Header>
                  <List.Description>
                    {this.state.apixuLow}
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="h" />
                <List.Content>
                  <List.Header>Humidity</List.Header>
                  <List.Description>{this.state.apixuHumidity}</List.Description>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <Icon name="product hunt" />
                <List.Content>
                  <List.Header>Precipitation</List.Header>
                  <List.Description>{this.state.apixuPrecipitation}</List.Description>
                </List.Content>
              </List.Item>
              <br />
              <div>Source pulled from: Apixu</div>
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <List>
              <div className="cardHeaderTemp">
                <Header size="huge" style={{ margin: 0 }}>
                  Average Temperature: {this.state.avgTemp}
                </Header>
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
      </Grid>
    </div>
  );
  }
};

export default Tomorrow;
