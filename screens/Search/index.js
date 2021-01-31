import React, { Component } from 'react';
import { movieAPI, tvAPI } from '../../api';
import SearchPresenter from './SearchPresenter';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      results: {
        movies: [],
        shows: [],
        moviesError: null,
        showsError: null,
      },
    };
  }

  onChange = (text) => this.setState({ keyword: text });

  search = async () => {
    if (this.state.keyword === '') {
      return;
    }

    const [movies, moviesError] = await movieAPI.search(this.state.keyword);
    const [shows, showsError] = await tvAPI.search(this.state.keyword);

    this.setState({
      results: {
        movies,
        shows,
        moviesError,
        showsError,
      },
    });
  };
  render() {
    return (
      <SearchPresenter
        {...this.state.results}
        keyword={this.state.keyword}
        onChange={this.onChange}
        onSubmit={this.search}
      />
    );
  }
}

export default Search;
