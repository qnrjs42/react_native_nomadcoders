import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import SearchInput from '../../components/Search/Input';
import Horizontal from '../../components/Horizontal';
import HorizontalSlider from '../../components/HorizontalSlider';
import Vertical from '../../components/Vertical';
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
      <Container contentContainerStyle={{
        paddingTop: 10,
      }}>
        <SearchInput
          placeholder={'Write a keybord'}
          value={this.props.keyword}
          onChange={this.props.onChange}
          onSubmit={this.props.onSubmit}
        />
        {this.props.movies.length !== 0 && (
          <HorizontalSlider title="Movie Results">
            {this.props.movies.map((movie) => (
              <Vertical
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path || movie.backdrop_path}
                votes={movie.vote_average}
              />
            ))}
          </HorizontalSlider>
        )}
        {this.props.shows.length !== 0 && (
          <HorizontalSlider title="TV Results">
            {this.props.shows.map((show) => (
              <Vertical
                key={show.id}
                id={show.id}
                title={show.name}
                poster={show.poster_path || show.backdrop_path}
              />
            ))}
          </HorizontalSlider>
        )}
      </Container>
    );
  }
}

export default SearchPresenter;
