import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import SearchInput from '../../components/Search/Input';
import Horizontal from '../../components/Horizontal';
import HorizontalSlider from '../../components/HorizontalSlider';
const Container = styled.ScrollView`
  background-color: black;
`;

class SearchPresenter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <SearchInput
          placeholder={'Write a keybord'}
          value={this.props.keyword}
          onChange={this.props.onChange}
          onSubmit={this.props.onSubmit}
        />
        <HorizontalSlider title="Movie Results">
          {this.props.movies.map((movie) => (
            <Horizontal 

            />
          ))}
        </HorizontalSlider>
        <HorizontalSlider title="TV Results">
        {this.props.shows.map((show) => (
            <Horizontal 

            />
          ))}
        </HorizontalSlider>
      </Container>
    );
  }
}

export default SearchPresenter;
