import React from "react";
import { Grid, Image } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";

const Tomorrow = props => {
  return (
    <div>
      <Grid centered columns={2} className="hello">
        <Grid.Column>
          <Icon name="sun" size="massive" />
          85
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Tomorrow;
