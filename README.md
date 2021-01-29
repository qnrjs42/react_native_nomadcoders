## navigation

```jsx
// App.js
import { NavigationContainer } from '@react-navigation/native';
import Stack from './navigation/Stack';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    );
  }
}

export default App;
```

```jsx
// navigation/Stack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
```

- `Stack.Navigatior`가 component들에게 `navigation`이라는 props를 준다.

```js
// navigation/Tabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Detail from '../screens/Detail';
import Movies from '../screens/Movies';
import TV from '../screens/TV';
import Search from '../screens/Search';
import Favs from '../screens/Favs';

const Tabs = createBottomTabNavigator();

export default () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Movies" component={Movies} />
    <Tabs.Screen name="TV" component={TV} />
    <Tabs.Screen name="Search" component={Search} />
    <Tabs.Screen name="Favs" component={Favs} />
  </Tabs.Navigator>
);
```

```
// 네비게이션 순서
1. NavigationContainer
2. createStackNavigator
3. createBottomTabNavigator
```

### Tab Navigation Current Tab

```jsx
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

  componentDidUpdate() {
    const name = getFocusedRouteNameFromRoute(this.props.route);
    this.props.navigation.setOptions({
      title: name,
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
```

- `getFocusedRouteNameFromRoute(this.props.route)`를 전달하면 현재 탭의 이름을 반환해준다.

---

## navigation style

```jsx
// navigation/Stack.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: 'black',
        shadowColor: 'black',
      },
      headerTintColor: 'white',
      headerBackTitleVisible: false,
    }}>
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
```

- `<Stack.Navigator screenOptions>`는 모든 네비게이션에 적용 시킴.

---

## Tab Navigation Icons

```jsx
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
```

```
iwascardeath
asd1231
saboko7262@jentrix.com
```

