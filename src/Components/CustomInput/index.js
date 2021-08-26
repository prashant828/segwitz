import React from 'react';
import {TextInput} from 'react-native';
import styles from './style';
const CustomInput = ({style, onChangeText, value, placeholder}) => {
  return (
    <TextInput
      style={[styles.input, {...style}]}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
  );
};
export default CustomInput;
