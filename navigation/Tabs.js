import React, { Component } from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import Movies from '../screens/Movies';
import TV from '../screens/TV';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
import { Platform } from 'react-native';

const Tabs = createBottomTabNavigator();

class TabClass extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const name = getFocusedRouteNameFromRoute(this.props.route);
    this.props.navigation.setOptions({
      title: name,
    });
  }

  render() {
    return (
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            // ios면 아이콘 이름이 ios로 시작함.
            let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
            switch (route.name) {
              case 'Movies':
                iconName += 'film';
                break;
              case 'TV':
                iconName += 'tv';
                break;
              case 'Search':
                iconName += 'search';
                break;
              case 'Favs':
                iconName += 'heart';
                break;
              default:
                iconName = 'logo-nodejs';
            }

            return (
              <IonicIcons
                name={iconName}
                color={focused ? 'white' : 'grey'}
                size={26}
              />
            );
          },
        })}
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: 'black',
            borderTopColor: 'black',
          },
        }}>
        <Tabs.Screen name="Movies" component={Movies} />
        <Tabs.Screen name="TV" component={TV} />
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="Favs" component={Favs} />
      </Tabs.Navigator>
    );
  }
}

export default TabClass;
