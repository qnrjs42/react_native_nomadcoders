import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, View } from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import Slide from '../../components/Movies/Slide';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('screen');

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
`;

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
`;

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
          <SliderContainer>
            <Swiper controlsEnabled={false} timeout={3} loop>
              {this.props.nowPlaying.map((movie) => (
                <Slide
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  overview={movie.overview}
                  votes={movie.vote_average}
                  backgroundImage={movie.backdrop_path}
                  poster={movie.poster_path}
                />
              ))}
            </Swiper>
          </SliderContainer>
        )}
      </Container>
    );
  }
}

export default MoviesPresenter;
