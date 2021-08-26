import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import CustomButton from '../../Components/CustomButton';
import Container from '../../Components/Container';
import {useDispatch} from 'react-redux';
import {logoutUser} from '../../Store/user/user';
const Account = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Container style={{paddingTop: 10}}>
        <CustomButton onPress={() => dispatch(logoutUser())} title="Logout" />
      </Container>
    </SafeAreaView>
  );
};

export default Account;
