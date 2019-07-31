import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { Card, Icon } from "semantic-ui-react";

const Today = props => {
  return (
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
  );
};

export default Today;
