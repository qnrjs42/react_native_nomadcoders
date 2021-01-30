import axios from 'axios';
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { movieAPI } from '../api';

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: {
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
      console.log(nowPlaying);
      console.log(popular);

      this.setState({
        movies: {
          nowPlaying,
          popular,
          upcoming,
          nowPlayingError,
          popularError,
          upcomingError,
        },
      });

      console.log(nowPlaying);
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
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Text style={{ color: 'white' }}>
          {this.state.movies.nowPlaying?.length}
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate('Detail')}
          title="Go to Movie"
        />
      </View>
    );
  }
}

export default Movies;
