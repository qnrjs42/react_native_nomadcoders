import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const PosterImage = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

class Poster extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PosterImage source={{ uri: this.props.url }} />;
  }
}

Poster.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Poster;
