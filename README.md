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
        {/* Tabs.Screen이 제일 위에 있는 컴포넌트가 제일 먼저 화면에 보인다. */}
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

---

## navigation.navigate, navigation.route

- 해당 방법은 Tabs.screen이 부모 컴포넌트일 때 사용할 수 있다.
- hooks의 useNavigation() 대체

```
// Movies 컴포넌트일 때 파일 관계

/App.js -> /navigation/Stack.js -> /navigation/Tabs.js ->
/screens/Movies/index.js -> /screens/Movies/MoviePresenter.js -> 
/components/Vertical.js
```

```jsx
import { NavigationContext } from '@react-navigation/native';

class Vertical extends Component {
  static contextType = NavigationContext;

  goToDetail = () => {
      const navigation = this.context;
      navigation.navigate('Detail', {
        id: this.props.id,
        title: this.props.title,
        votes: this.props.votes,
      });
    };

	render() {
    return();
  }

export default Vertical;
```



```jsx
// components/Vertical.js
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
```

```jsx
// screens/Detail.js

import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { id, title } = this.props.route.params;
    this.props.navigation.setOptions({
      title,
    });
    console.log(id);
  }

  render() {
    return (
      <View>
        <Text>ID: {this.props.route.params.id}</Text>
      </View>
    );
  }
}

export default Detail;
```

