import React from 'react';
import { Grid } from 'semantic-ui-react';

export default props => {
  return (
    <Grid>
      <Grid.Column width={3} />
      <Grid.Column width={10}>{props.children}</Grid.Column>
      <Grid.Column width={3} />
    </Grid>
  );
};
