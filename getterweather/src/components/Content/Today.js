import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { Card, Icon } from "semantic-ui-react";

const Today = props => {
  return (
<<<<<<< HEAD
    <Grid>
      <Grid.Row>
        <Grid.Column width={12} className="weather-img" />
        <Grid.Column width={4}>
          <Card className="today-panel">
            <Card.Content>
              <Card.Header>Today's Average</Card.Header>
              <Card.Meta>
                <span className="date">Metadata and all that jazz</span>
              </Card.Meta>
              <Card.Description>High:</Card.Description>
              <Card.Description>Low:</Card.Description>
              <Card.Description>Precipitation:</Card.Description>
              <Card.Description>Humidity:</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="user" />
              <a href="https://iq.swackett.com/app/web/engine">
                {/* change icon and send to new tab */}
                What should I wear?
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
=======
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
                <Header size="huge">Average: 88</Header>
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
>>>>>>> 68a416d078416fd8531726ec33a4c1fbcc524e3b
  );
};

export default Today;
