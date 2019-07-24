import React from "react";

import { ListGroup, ListGroupItem } from "reactstrap";

export default function Week1() {
  return (
    <div>
      <h3>Week 1 </h3>
      <p>
        Be sure to{" "}
        <strong>
          not use the standard <code>.btn</code> classes here
        </strong>
        .
      </p>
      <ListGroup>
        <ListGroupItem active tag="a" href="#" action>
          Here's the forecast for Week 1
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Sunday - Week 1
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Monday - Week 1
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Tuesday - Week 1
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Wednesday - Week 1
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Thursday - Week 1
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Friday - Week 1
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Saturday - Week 1
        </ListGroupItem>
      </ListGroup>
      <p />
    </div>
  );
}
