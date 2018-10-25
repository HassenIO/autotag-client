import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Layer, Title } from '../../components';
import './style.css';

class Resource extends Component {
  render() {
    return (
      <div className="Resource">
        <Layer>
          <Title>Hey Resource page</Title>
          <Typography variant="body1">
            This page will contain the resource description (file), with the
            result of jobs (text from image, text tagging, sentiment
            analysis,...) from the different providers (AWS, GCP, MS Azure).
          </Typography>
        </Layer>
      </div>
    );
  }
}

export default Resource;
