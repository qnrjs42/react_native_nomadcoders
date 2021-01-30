import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const CustomText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-left: 30px;
`;

class Title extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <CustomText>{this.props.title}</CustomText>;
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
