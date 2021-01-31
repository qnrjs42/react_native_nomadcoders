import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import { tvAPI } from '../../api';
import TVPresenter from './TVPresenter';

class TV extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shows: {
        loading: true,
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
          loading: false,
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
    return <TVPresenter refreshingFunc={this.getData} {...this.state.shows} />;
  }
}

export default TV;
