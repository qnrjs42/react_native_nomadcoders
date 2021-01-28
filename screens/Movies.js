import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

class Movies extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
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
