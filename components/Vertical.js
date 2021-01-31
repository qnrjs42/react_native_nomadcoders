import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import Votes from './Votes';
import Poster from './Poster';
import { trimText } from '../utils';

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin: 5px 0px 10px 0px;
`;

class Vertical extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);

    this.state = {};
  }

  goToDetail = () => {
    const navigation = this.context;
    navigation.navigate('Detail', {
      id: this.props.id,
      title: this.props.title,
      votes: this.props.votes,
    });
  };

  render() {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress={this.goToDetail}>
        <Container>
          <Poster url={this.props.poster} />
          <Title>{trimText(this.props.title, 10)}</Title>
          {this.props.votes > 0 && <Votes votes={this.props.votes} />}
        </Container>
      </TouchableOpacity>
    );
  }
}

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Vertical;
