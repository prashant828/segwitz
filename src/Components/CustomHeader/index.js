import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../Styles/colors';
const CustomHeader = ({navigation, title}) => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.left}>
          <MaterialIcon name="arrow-left" size={30} color={colors.primary} />
        </TouchableOpacity>
        <View style={styles.center}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.right}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
  },
  center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
  },
});

export default CustomHeader;
