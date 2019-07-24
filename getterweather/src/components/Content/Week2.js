import React from "react";

import { ListGroup, ListGroupItem } from "reactstrap";

export default function Week2() {
  return (
    <div>
      <h3>Week 2 </h3>
      <p>
        Be sure to{" "}
        <strong>
          not use the standard <code>.btn</code> classes here
        </strong>
        .
      </p>
      <ListGroup>
        <ListGroupItem active tag="a" href="#" action>
          Here's the forecast for Week 2
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Sunday - Week 2
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Monday - Week 2
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Tuesday - Week 2
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Wednesday - Week 2
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Thursday - Week 2
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Friday - Week 2
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Saturday - Week 2
        </ListGroupItem>
      </ListGroup>
      <p />
    </div>
  );
}
