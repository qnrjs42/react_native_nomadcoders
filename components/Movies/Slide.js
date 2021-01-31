import React, { Component } from 'react';
import styled from 'styled-components/native';
import { NavigationContext } from '@react-navigation/native';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { apiImage } from '../../api';
import Poster from '../Poster';
import Votes from '../Votes';
import { trimText } from '../../utils';

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

const VotesContainer = styled.View`
  margin-bottom: 7px;
`;

const Overview = styled.Text`
  color: rgba(220, 220, 220, 1);
  font-size: 14px;
  font-weight: normal;
`;

const Button = styled.View`
  margin-top: 10px;
  background-color: #e74c3c;
  padding: 7px 10px;
  border-radius: 3px;
`;

const ButtonText = styled.Text`
  color: white;
`;

class Slide extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);

    this.state = {};
  }

  goToDetail = () => {
    const navigation = this.context;
    navigation.navigate('Detail', {
      id: this.props.id,
      title: this.props.title,
      votes: this.props.votes,
      poster: this.props.poster,
      overview: this.props.overvuew,
      releaseDate: this.props.releaseDate,
      backgroundImage: this.props.backgroundImage,
    });
  };

  render() {
    const { backgroundImage, poster, title, votes, overview } = this.props;
    return (
      <Container>
        <BG
          style={{ width: '100%', height: '100%' }}
          source={{ uri: apiImage(backgroundImage) }}
        />
        <Content>
          <Poster url={poster} />
          <Data>
            <Title>{trimText(title, 40)}</Title>
            <VotesContainer>
              <Votes votes={votes} />
            </VotesContainer>
            <Overview>{trimText(overview, 110)}</Overview>
            <TouchableOpacity onPress={this.goToDetail}>
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
  poster: PropTypes.string.isRequired,
};

export default Slide;
