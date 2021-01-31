import React, { Component } from 'react';
import { ActivityIndicator, Dimensions, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Swiper from 'react-native-web-swiper';
import Slide from '../../components/Movies/Slide';
import Title from './Title';
import Vertical from '../../components/Vertical';
import Horizontal from '../../components/Horizontal';
import ScrollContainer from '../../components/ScrollContainer';

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

  // componentDidMount() {
  //   console.log(this.props);
  // }

  render() {
    return (
      <ScrollContainer loading={this.props.loading}>
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
              <Title title={'Popular Movies'} />
              <ScrollView
                style={{ marginTop: 20, marginBottom: 40 }}
                contentContainerStyle={{ paddingLeft: 30 }}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {this.props.popular.map((movie) => (
                  <Vertical
                    key={movie.id}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    votes={movie.vote_average}
                  />
                ))}
              </ScrollView>
              <Title title={'Coming Soon'} />
              <UpcomingContainer>
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
              </UpcomingContainer>
            </Container>
          </>
        )}
      </ScrollContainer>
    );
  }
}

export default MoviesPresenter;
