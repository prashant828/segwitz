import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../Containers/Login';
import WelcomeScreen from '../Containers/Welcome';
import HomeScreen from '../Containers/Home';
import CustomHeader from '../Components/CustomHeader';
import colors from '../Styles/colors';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({route}) => ({
        header: props => {
          if (route.name == 'Login') {
            return <CustomHeader {...props} title={'Sign In'} />;
          }
          return null;
        },
        contentStyle: {backgroundColor: colors.white},
      })}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
