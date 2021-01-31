import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from '../screens/Movies/Title';
import { ScrollView } from 'react-native-gesture-handler';
import styled from 'styled-components';

const Container = styled.View`
  margin-top: 20px;
`;

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Title title={this.props.title} />
        <Container>{this.props.children}</Container>
      </>
    );
  }
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default List;
