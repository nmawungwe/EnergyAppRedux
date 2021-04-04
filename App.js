import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import HomeScreen  from './screens/HomeScreen'
import StatsScreen from './screens/StatsScreen'
import TipsScreen from './screens/TipsScreen'
import LocationScreen from './screens/LocationScreen'

import rootReducer from './reducers/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(rootReducer)


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: '#61dafb'
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons 
                  name="home-edit" 
                  color={color} 
                  size={size}
                  />
              )
            }}
            />
          <Tab.Screen
            name="Tips"
            component={TipsScreen}
            options={{
              tabBarLabel: 'Tips',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons 
                name="lightbulb-on" 
                color={color}
                size={size}
                />
              )
            }}
          />
          <Tab.Screen 
            name="Stats" 
            component={StatsScreen}
            options={{
              tabBarLabel: 'Stats',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons 
                name="information-variant" 
                color={color}
                size={size}
                />
              )
            }}
            />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

