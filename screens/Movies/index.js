import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import { movieAPI } from '../../api';
import MoviePresneter from './MoviesPresenter';

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: {
        loading: true,
        nowPlaying: [],
        popular: [],
        upcoming: [],
        nowPlayingError: null,
        popularError: null,
        upcomingError: null,
      },
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const [nowPlaying, nowPlayingError] = await movieAPI.nowPlaying();
      const [popular, popularError] = await movieAPI.popular();
      const [upcoming, upcomingError] = await movieAPI.upcoming();
      this.setState({
        movies: {
          loading: false,
          nowPlaying,
          popular,
          upcoming,
          nowPlayingError,
          popularError,
          upcomingError,
        },
      });
    } catch (err) {
      console.error(err);
      this.setState({
        nowPlaying: {
          error: err,
        },
      });
    }
  };

  render() {
    return (
      <MoviePresneter
        navigation={this.props.navigation}
        refreshingFunc={this.getData}
        {...this.state.movies}
      />
    );
  }
}

export default Movies;
