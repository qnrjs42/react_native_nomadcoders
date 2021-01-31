import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SearchPresenter from './SearchPresenter';

class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <SearchPresenter />;
  }
}

export default Search;
