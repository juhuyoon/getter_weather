import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

export default function ThisWeek() {
  return (
    <div>
      <h3>This Week </h3>
      <p>
        Be sure to{" "}
        <strong>
          not use the standard <code>.btn</code> classes here
        </strong>
        .
      </p>
      <ListGroup>
        <ListGroupItem active tag="a" href="#" action>
          Here's the forecast for This Week
        </ListGroupItem>
        <Row>
          <Col>
            <ListGroupItem tag="a" href="#" action>
              Sunday - This Week
            </ListGroupItem>
          </Col>

          <Col>
            <ListGroupItem tag="a" href="#" action>
              Monday - This Week
            </ListGroupItem>
          </Col>

          <Col>
            <ListGroupItem tag="a" href="#" action>
              Tuesday - This Week
            </ListGroupItem>
          </Col>

          <Col>
            <ListGroupItem tag="a" href="#" action>
              Wednesday - This Week
            </ListGroupItem>
          </Col>

          <Col>
            <ListGroupItem disabled tag="a" href="#" action>
              Thursday - This Week
            </ListGroupItem>
          </Col>

          <Col>
            <ListGroupItem disabled tag="a" href="#" action>
              Friday - This Week
            </ListGroupItem>
          </Col>

          <Col>
            <ListGroupItem disabled tag="a" href="#" action>
              Saturday - This Week
            </ListGroupItem>
          </Col>
        </Row>
      </ListGroup>
      <p />
    </div>
  );
}
