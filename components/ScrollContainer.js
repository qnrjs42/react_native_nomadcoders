import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, RefreshControl, ScrollView } from 'react-native';
import styled from 'styled-components/native';

class ScrollContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
    };
  }

  onRefresh = async () => {
    this.setState({
      refreshing: true,
    });
    await this.props.refreshingFunc();
    this.setState({
      refreshing: false,
    });
  };

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
            tintColor={'white'}
          />
        }
        style={{ backgroundColor: 'black' }}
        contentContainerStyle={{
          ...this.props.contentContainerStyle,
          flex: this.props.loading ? 1 : 0,
          justifyContent: this.props.loading ? 'center' : 'flex-start',
        }}>
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
  contentContainerStyle: PropTypes.object,
  refreshingFunc: PropTypes.func,
};

export default ScrollContainer;
