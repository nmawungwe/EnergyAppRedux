import React from 'react';

import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createStackNavigator } from '@react-navigation/stack'



import HomeScreen  from './screens/HomeScreen'
import StatsScreen from './screens/StatsScreen'
import TipsScreen from './screens/TipsScreen'
import LocationScreen from './screens/LocationScreen'
import TipScreen from './screens/TipScreen'

import rootReducer from './reducers/index'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(rootReducer)


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()



function getHeaderTitle(route) {

  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Calculator';
    case 'Stats':
      return 'Home Statistics';
    case 'Producers':
      return 'Major Providers'
    case 'Tips':
      return 'Savings Tips'
  }

}



 function Home() {
  return (
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

          <Tab.Screen
            name="Producers"
            component={LocationScreen}
            options={{
              tabBarLabel: 'Producers',
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons
                name="map-marker"
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
              tabBarLabel: "Tips",
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons 
                name="lightbulb-on" 
                color={color}
                size={size}
                />
              )
            }}
          />
        </Tab.Navigator>
  );
}

export default function App() {
    return(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home" 
              component={Home}
              options={({ route }) => ({
                headerTitle: getHeaderTitle(route)
              })}  
            />
            {/* <Stack.Screen name="Tips" component={TipsScreen}/>  */}
            <Stack.Screen name="Tip" component={TipScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
}

