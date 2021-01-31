import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import ScrollContainer from '../../components/ScrollContainer';


const CustomText = styled.Text`
  color: white;
`;

class TVPresenter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ScrollContainer loading={this.props.loading}>
        <View>
          <CustomText>hi</CustomText>
        </View>
      </ScrollContainer>
    );
  }
}

TVPresenter.propTypes = {
  
};

export default TVPresenter;
