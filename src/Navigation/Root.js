import * as React from 'react';
import {useSelector} from 'react-redux';
import AuthNavigator from './Auth';
import MainNavigator from './Main';

function RootNavigator() {
  const user = useSelector(state => (state.user ? state.user : {}));
  return <>{user.userObj ? <MainNavigator /> : <AuthNavigator />}</>;
}

export default RootNavigator;
