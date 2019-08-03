import React from "react";
import { Header, Grid, Image, Segment, Icon, List } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
const Today = props => {
  return (
    <div>
      <Grid columns="equal" className="today-gradient">
        <div>
          <Header as="h1" className="main-content-title">
            Today
          </Header>
        </div>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <List>
                <div>
                  <Header size="huge">Average Temperature: 88</Header>
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
                <a
                  href="https://iq.swackett.com/app/web/engine"
                  target="_blank"
                >
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
                <div>
                  <Header size="huge">88</Header>
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
                <div>
                  <Header size="huge">88</Header>
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
                <div>
                  <Header size="huge">88</Header>
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
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Today;
