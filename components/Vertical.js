import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { apiImage } from '../api';
import Votes from './Votes';
import Poster from './Poster';

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
          <Poster url={apiImage(this.props.poster)} />
          <Title>
            {this.props.title.length > 10
              ? `${this.props.title.slice(0, 10)}...`
              : this.props.title}
          </Title>
          <Votes votes={this.props.votes} />
        </Container>
      </TouchableOpacity>
    );
  }
}

Vertical.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
