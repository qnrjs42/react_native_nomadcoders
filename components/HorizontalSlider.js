import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from '../screens/Movies/Title';
import { ScrollView } from 'react-native-gesture-handler';

class HorizontalSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Title title={this.props.title} />
        <ScrollView
          style={{ marginTop: 20, marginBottom: 40 }}
          contentContainerStyle={{ paddingLeft: 30 }}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {this.props.children}
        </ScrollView>
      </>
    );
  }
}

HorizontalSlider.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;
