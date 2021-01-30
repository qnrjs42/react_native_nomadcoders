import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const CustomVotes = styled.Text`
  color: rgba(220, 220, 220, 1);
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 7px;
`;

class Votes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <CustomVotes>⭐️ {this.props.votes} / 10</CustomVotes>;
  }
}

Votes.propTypes = {
  votes: PropTypes.number.isRequired,
};

export default Votes;
