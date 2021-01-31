import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import styled from 'styled-components/native';

class ScrollContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl tintColor={'white'} />
        }
        style={{ backgroundColor: 'black' }}
        contentContainerStyle={{
          flex: this.props.loading ? 1 : 0,
          justifyContent: this.props.loading ? 'center' : 'flex-start',
        }}
      >
        {this.props.loading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          this.props.children
        )}
      </ScrollView>
    );
  }
}

ScrollContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollContainer;
