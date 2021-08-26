import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Containers/Home';
import AccountScreen from '../Containers/Account';
import colors from '../Styles/colors';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        contentStyle: {backgroundColor: colors.white},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Account') {
            iconName = 'account-circle';
          }
          return <MaterialIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.greyText,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default MainNavigator;
