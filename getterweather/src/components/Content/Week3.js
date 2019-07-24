import React from "react";

import { ListGroup, ListGroupItem } from "reactstrap";

export default function Week3() {
  return (
    <div>
      <h3>Week 3 </h3>
      <p>
        Be sure to{" "}
        <strong>
          not use the standard <code>.btn</code> classes here
        </strong>
        .
      </p>
      <ListGroup>
        <ListGroupItem active tag="a" href="#" action>
          Here's the forecast for Week 3
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Sunday - Week 3
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Monday - Week 3
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Tuesday - Week 3
        </ListGroupItem>
        <ListGroupItem tag="a" href="#" action>
          Wednesday - Week 3
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Thursday - Week 3
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Friday - Week 3
        </ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>
          Saturday - Week 3
        </ListGroupItem>
      </ListGroup>
      <p />
    </div>
  );
}
