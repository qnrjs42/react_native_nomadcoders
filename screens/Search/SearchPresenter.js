import React, { Component } from 'react';
import styled from 'styled-components';
import SearchInput from '../../components/Search/Input';
import HorizontalSlider from '../../components/HorizontalSlider';
import Vertical from '../../components/Vertical';
import ScrollContainer from '../../components/ScrollContainer';

class SearchPresenter extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ScrollContainer
        loading={false}
        refreshingFunc={this.props.onSubmit}
        contentContainerStyle={{
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
                poster={movie.poster_path}
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
                poster={show.poster_path}
              />
            ))}
          </HorizontalSlider>
        )}
      </ScrollContainer>
    );
  }
}

export default SearchPresenter;
