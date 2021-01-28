import React, { Component } from 'react';
import { Text, View, ActivityIndicator, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Stack from './navigation/Stack';

class App extends Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  onFinish = () => {
    this.setState({
      isReady: true,
    });
  };

  render() {
    return (
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    );
  }
}

export default App;
