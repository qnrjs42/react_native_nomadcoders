import React, { Component } from 'react';
import { Dimensions, Text, View } from 'react-native';
import styled from 'styled-components';
import Swiper from 'react-native-web-swiper';

const { width, height } = Dimensions.get('screen');

const Header = styled.View`
  width: 100%;
  height: ${height / 3}px;
`;

const Section = styled.View`
  background-color: red;
  height: 100%;
`;

const SText = styled.Text``;

class MoviesPresenter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Header>
        <Swiper>
          <Section>
            <SText>Hello</SText>
          </Section>
          <Section>
            <SText>Hello</SText>
          </Section>
          <Section>
            <SText>Hello</SText>
          </Section>
        </Swiper>
      </Header>
    );
  }
}

export default MoviesPresenter;
