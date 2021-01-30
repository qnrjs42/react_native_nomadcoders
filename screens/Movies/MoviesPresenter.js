import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';

const { width, height } = Dimensions.get('screen');

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

const Header = styled.View`
  width: 100%;
  height: ${height / 3}px;
`;

const Section = styled.View`
  background-color: red;
  height: 100%;
`;

const SText = styled.Text``;

class MoviesPresenter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // componentDidMount() {
  //   console.log(this.props);
  // }

  render() {
    return (
      <Container>
        {this.props.loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Header>
            <Swiper controlsEnabled={false} timeout={3} loop>
              {this.props.nowPlaying.map((movie) => (
                <Section key={movie.id}>
                  <Text>{movie.original_title}</Text>
                </Section>
              ))}
            </Swiper>
          </Header>
        )}
      </Container>
    );
  }
}

export default MoviesPresenter;
