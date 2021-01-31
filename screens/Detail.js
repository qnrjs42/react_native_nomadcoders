import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { id, title } = this.props.route.params;
    this.props.navigation.setOptions({
      title,
    });
    console.log(id);
  }

  render() {
    return (
      <View>
        <Text>ID: {this.props.route.params.id}</Text>
      </View>
    );
  }
}

export default Detail;
