import React from "react";

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
        <ListGroupItem tag="a" href="#" action>
          Sunday - This Week
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Monday - This Week
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Tuesday - This Week
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Wednesday - This Week
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Thursday - This Week
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Friday - This Week
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Saturday - This Week
        </ListGroupItem>
      </ListGroup>
      <p />
    </div>
  );
}
