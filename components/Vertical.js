import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { apiImage } from '../api';
import Votes from './Votes';
import Poster from './Poster';

const Container = styled.View``;

const Title = styled.Text`
  color: white;
`;

class Vertical extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Poster url={apiImage(this.props.poster)} />
        <Title>{this.props.title}</Title>
        <Votes votes={this.props.votes} />
      </Container>
    );
  }
}

Vertical.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
