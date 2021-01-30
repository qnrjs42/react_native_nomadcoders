import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { apiImage } from '../api';
import Votes from './Votes';
import Poster from './Poster';

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  font-size: 15px;
`;

class Horizontal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <Container>
          <Poster url={apiImage(this.props.poster)} />
          <Data>
            <Title>{this.props.title}</Title>
            <Votes votes={this.props.votes} />
          </Data>
        </Container>
      </TouchableOpacity>
    );
  }
}

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Horizontal;
