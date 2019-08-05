import React from "react";
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

const index = props => {
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <p> Welcome to Getter Weather </p>
        </Header>
        <p>Here you will find the most accurate weather. </p>
        <Form size="large">
          <Segment stacked>
            <Form.Input placeholder="ZIP Code" />

            <Button color="blue" fluid size="medium">
              Submit
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default index;
