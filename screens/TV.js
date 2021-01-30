import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { tvAPI } from '../api';

class TV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: {
        today: [],
        popular: [],
        thisWeek: [],
        topRated: [],
        todayError: null,
        popularError: null,
        thisWeekError: null,
        topRatedError: null,
      },
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const [today, todayError] = await tvAPI.today();
      const [popular, popularError] = await tvAPI.popular();
      const [thisWeek, thisWeekError] = await tvAPI.thisWeek();
      const [topRated, topRatedError] = await tvAPI.topRated();

      this.setState({
        shows: {
          today,
          popular,
          thisWeek,
          topRated,
          todayError,
          popularError,
          thisWeekError,
          topRatedError,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <View>
        <Text>{this.state.shows.popular?.length}</Text>
      </View>
    );
  }
}

export default TV;
