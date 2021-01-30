import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import Poster from './Poster';
import { formatDate, trimText } from '../utils';

const Container = styled.View`
  padding: 0px 30px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: flex-start;
`;

const Data = styled.View`
  align-items: flex-start;
  width: 60%;
  margin-left: 25px;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Overview = styled.Text`
  color: white;
`;

const ReleaseDate = styled.Text`
  color: white;
  margin-bottom: 6px;
  font-size: 12px;
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
          <Poster url={this.props.poster} />
          <Data>
            <Title>{trimText(this.props.title, 30)}</Title>
            {this.props.releaseDate && (
              <ReleaseDate>{formatDate(this.props.releaseDate)}</ReleaseDate>
            )}
            <Overview>{trimText(this.props.overview, 120)}</Overview>
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
  releaseDate: PropTypes.string,
  overview: PropTypes.string.isRequired,
};

export default Horizontal;
