import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { apiImage } from '../../api';

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.6;
  position: absolute;
`;

const Content = styled.View`
  flex-direction: row;
`;

const Data = styled.View`
  width: 50%;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`;

const Votes = styled.Text`
  color: white;
  opacity: 0.7;
`;

const Overview = styled.Text`
  color: white;
  opacity: 0.7;
`;

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <BG
          style={{ width: '100%', height: '100%' }}
          source={{ uri: apiImage(this.props.backgroundImage) }}
        />
        <Content>
          <Data>
            <Title>{this.props.title}</Title>
            <Votes>{this.props.votes} / 10</Votes>
            <Overview>{this.props.overview}</Overview>
          </Data>
        </Content>
      </Container>
    );
  }
}

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};

export default Slide;
