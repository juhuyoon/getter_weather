import React from "react";

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
        <ListGroupItem tag="a" href="#" action>
          Sunday - Next Week
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Monday - Next Week
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Tuesday - Next Week
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Wednesday - Next Week
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Thursday - Next Week
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Friday - Next Week
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Saturday - Next Week
        </ListGroupItem>
      </ListGroup>
      <p />
    </div>
  );
}
