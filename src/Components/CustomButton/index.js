import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';
const CustomButton = ({style, title, onPress, textStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {...style}]}
      title={title}>
      <Text style={[styles.text, {...textStyle}]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
