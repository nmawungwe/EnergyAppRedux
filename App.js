import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import  HomeScreen  from './screens/HomeScreen'
import StatsScreen from './screens/StatsScreen'
import TipsScreen from './screens/TipsScreen'



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Tips" component={TipsScreen}/>
        <Tab.Screen name="Stats" component={StatsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

