import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { movieAPI } from '../api';

class Favs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: {
        results: [],
        error: null,
      },
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const [results, error] = await movieAPI.discover();

      this.setState({
        movies: {
          results,
          error,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <View>
        <Text>{this.state.movies.results.length}</Text>
      </View>
    );
  }
}

export default Favs;
