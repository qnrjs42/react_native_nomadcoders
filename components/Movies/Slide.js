import React, { Component } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { apiImage } from '../../api';
import Poster from '../Poster';

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.4;
  position: absolute;
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 19px;
  margin-bottom: 10px;
`;

const Votes = styled.Text`
  color: rgba(220, 220, 220, 1);
  margin-bottom: 7px;
  font-size: 12px;
`;

const Overview = styled.Text`
  color: rgba(220, 220, 220, 1);
  font-size: 14px;
  font-weight: normal;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 5px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
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
          <Poster url={apiImage(this.props.poster)} />
          <Data>
            <Title>{this.props.title.slice(0, 30)}</Title>
            <Votes>⭐️ {this.props.votes} / 10</Votes>
            <Overview>{this.props.overview.slice(0, 120)}</Overview>
            <TouchableOpacity>
              <Button>
                <ButtonText>View Details</ButtonText>
              </Button>
            </TouchableOpacity>
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
