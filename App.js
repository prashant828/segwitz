/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {View, Text} from 'react-native';
import AuthNavigator from './src/Navigation/Auth';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
import RootNavigator from './src/Navigation/Root';
import store from './src/Store/store';
let persistor = persistStore(store);
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
