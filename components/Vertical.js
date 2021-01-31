import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import Votes from './Votes';
import Poster from './Poster';
import { trimText } from '../utils';

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 5px 0px 10px 0px;
`;

class Vertical extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <Container>
          <Poster url={this.props.poster} />
          <Title>{trimText(this.props.title, 10)}</Title>
          {this.props.votes > 0 && <Votes votes={this.props.votes} />}
        </Container>
      </TouchableOpacity>
    );
  }
}

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
