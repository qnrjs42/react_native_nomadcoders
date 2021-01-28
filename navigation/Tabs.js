import React, { Component } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detail from '../screens/Detail';
import Movies from '../screens/Movies';
import TV from '../screens/TV';
import Search from '../screens/Search';
import Favs from '../screens/Favs';

const Tabs = createBottomTabNavigator();

class TabClass extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   this.props.navigation.setOptions({ title: 'Hello changed Title' });
  // }

  componentDidUpdate() {
    this.props.navigation.setOptions({
      title: getFocusedRouteNameFromRoute(this.props.route),
    });
  }

  render() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name="Movies" component={Movies} />
        <Tabs.Screen name="TV" component={TV} />
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="Favs" component={Favs} />
      </Tabs.Navigator>
    );
  }
}

export default TabClass;