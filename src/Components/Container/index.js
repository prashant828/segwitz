import React from 'react';
import {View} from 'react-native';
const Container = props => {
  return (
    <View style={[{paddingHorizontal: 15, flex: 1}, {...props.style}]}>
      {props.children}
    </View>
  );
};
export default Container;
