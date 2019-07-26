import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

const Tomorrow = props => {
  return (
    <div>
      {/* <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Tomorrow</CardTitle>
          <CardSubtitle>Tomorrow Card Subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card> */}

      <Col>
        <ListGroupItem tag="a" href="#" action>
          Monday - This Week
        </ListGroupItem>
      </Col>
    </div>
  );
};

export default Tomorrow;
