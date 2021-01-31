import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import SearchInput from '../../components/Search/Input';

const Container = styled.ScrollView`
  background-color: black;
`;

class SearchPresenter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <SearchInput placeholder={'write a keybord'} />
      </Container>
    );
  }
}

export default SearchPresenter;
