import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const TextInput = styled.TextInput`
  background-color: white;
`;

class SearchInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TextInput
        placeholder={this.props.placeholder}
        returnKeyType={'search'}
        autoCorrect={false}
        value={this.props.value}
        onChangeText={this.props.onChange}
        onSubmitEditing={this.props.onSubmit}
      />
    );
  }
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchInput;
