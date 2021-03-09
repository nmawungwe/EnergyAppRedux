import React from 'react';
import { AppRegistry } from 'react-native'

import thunk from 'redux-thunk'
import { name as appName } from './app.json'
import App from './App'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import {createStore, applyMiddleware} from 'redux'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


const RNRedux = () => (

  <Provider store={store}>
    <App />
  </Provider>

)

AppRegistry.registerComponent(appName, () => RNRedux);


