import React, { Component } from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import Slide from '../../components/Movies/Slide';
import Title from './Title';

import Vertical from '../../components/Vertical';
import Horizontal from '../../components/Horizontal';
import HorizontalSlider from '../../components/HorizontalSlider';
import ScrollContainer from '../../components/ScrollContainer';
import List from '../../components/List';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const SliderContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  margin-bottom: 50px;
`;

const Container = styled.View``;

const UpcomingContainer = styled.View`
  margin-top: 20px;
`;

class MoviesPresenter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ScrollContainer
        refreshingFunc={this.props.refreshingFunc}
        loading={this.props.loading}>
        {this.props.loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <>
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
            <Container>
              <HorizontalSlider title={'Popular Movies'}>
                {this.props.popular.map((movie) => (
                  <Vertical
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster={movie.poster_path}
                    votes={movie.vote_average}
                  />
                ))}
              </HorizontalSlider>
              <List title="Coming Soon">
                {this.props.upcoming.map((movie) => (
                  <Horizontal
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    releaseDate={movie.release_date}
                    poster={movie.poster_path}
                    overview={movie.overview}
                  />
                ))}
              </List>
            </Container>
          </>
        )}
      </ScrollContainer>
    );
  }
}

export default MoviesPresenter;
