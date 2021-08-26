import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import Container from '../../Components/Container';
import colors from '../../Styles/colors';
import {useDispatch} from 'react-redux';
import {updateUser} from '../../Store/user/user';
const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(updateUser({name: 'john', email: 'john@yopmail.com'}));
  };
  return (
    <Container style={{marginTop: 15}}>
      <CustomInput placeholder={'ID'} />
      <CustomInput placeholder="Password" style={styles.marginTop} />
      <CustomButton
        onPress={handleSubmit}
        title="Sign In"
        style={{marginTop: 20}}
      />
      <TouchableOpacity style={[styles.marginTop, {alignItems: 'center'}]}>
        <Text style={{color: colors.greyText}}>Forgot your password?</Text>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 10,
  },
});

export default Login;
