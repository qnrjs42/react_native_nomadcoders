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
```

- `getFocusedRouteNameFromRoute(this.props.route)`를 전달하면 현재 탭의 이름을 반환해준다.