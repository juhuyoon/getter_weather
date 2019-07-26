import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

export default function NextWeek() {
  return (
    <div>
      <h3>Next Week </h3>
      <p>
        Be sure to{" "}
        <strong>
          not use the standard <code>.btn</code> classes here
        </strong>
        .
      </p>
      <ListGroup>
        <ListGroupItem active tag="a" href="#" action>
          Here's the forecast for Next Week
        </ListGroupItem>
        <Row>
          <Col>
            <ListGroupItem tag="a" href="#" action>
              Sunday - Next Week
            </ListGroupItem>
          </Col>

          <Col>
            <ListGroupItem tag="a" href="#" action>
              Monday - Next Week
            </ListGroupItem>
          </Col>

          <Col>
            <ListGroupItem tag="a" href="#" action>
              Tuesday - Next Week
            </ListGroupItem>
          </Col>

          <Col>
            <ListGroupItem tag="a" href="#" action>
              Wednesday - Next Week
            </ListGroupItem>
          </Col>

          <Col>
            <ListGroupItem disabled tag="a" href="#" action>
              Thursday - Next Week
            </ListGroupItem>
          </Col>

          <Col>
            <ListGroupItem disabled tag="a" href="#" action>
              Friday - Next Week
            </ListGroupItem>
          </Col>

          <Col>
            <ListGroupItem disabled tag="a" href="#" action>
              Saturday - Next Week
            </ListGroupItem>
          </Col>
        </Row>
      </ListGroup>
      <p />
    </div>
  );
}
