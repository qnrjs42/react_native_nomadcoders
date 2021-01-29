import axios from 'axios';
import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { movieAPI } from '../api';

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nowPlaying: {
        movies: [],
        error: null,
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
      console.log(nowPlaying);
      console.log(popular);

      this.setState({
        nowPlaying: {
          movies: nowPlaying,
          error: nowPlayingError,
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
        <Text>Movies</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Detail')}
          title="Go to Movie"
        />
      </View>
    );
  }
}

export default Movies;
