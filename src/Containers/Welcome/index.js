import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import CustomButton from '../../Components/CustomButton';
import Container from '../../Components/Container';
import colors from '../../Styles/colors';
import Carousel from '../../Components/Carousel';
const Welcome = ({navigation}) => {
  return (
    <Container style={{justifyContent: 'center'}}>
      <Carousel />
      <CustomButton title="Login with Facebook" style={styles.facebook} />
      <CustomButton
        onPress={() => navigation.navigate('Login')}
        title="Sign In"
        style={styles.marginTop}
      />
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity style={{flex: 1}}>
          <Text style={{color: colors.greyText}}>Haven't registered yet?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{color: colors.primary}}>Join Now</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  marginTop: {
    marginTop: 20,
  },
  facebook: {
    backgroundColor: colors.facebookBlue,
    marginTop: 20,
  },
});

export default Welcome;
