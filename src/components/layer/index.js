import React from 'react';
import { Grid } from '@material-ui/core';

const getPaddings = size => {
  const totalPadding = 12 - size;
  const paddingLeft = parseInt(totalPadding / 2);
  const paddingRight = 12 - size - paddingLeft;

  return { paddingLeft, paddingRight };
};

export default props => {
  const size = props.size || 6;
  const { paddingLeft, paddingRight } = getPaddings(size);
  return (
    <Grid container>
      <Grid item xs={paddingLeft} />
      <Grid item xs={size}>
        {props.children}
      </Grid>
      <Grid item xs={paddingRight} />
    </Grid>
  );
};
