import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import CustomInput from '../../Components/CustomInput';
import CustomButton from '../../Components/CustomButton';
import Container from '../../Components/Container';
import colors from '../../Styles/colors';
import HomeCardCarousel from '../../Components/HomeCardsCarousel';
import {height, width} from '../../Styles/dimensions';
const Home = () => {
  const data = [
    {name: 'Hotel', image: require('../../Assets/Images/hotel-building.png')},
    {name: 'Flight', image: require('../../Assets/Images/aeroplane.png')},
    {name: 'Tour', image: require('../../Assets/Images/location-pin.png')},
    {name: 'Car', image: require('../../Assets/Images/sports-car.png')},
    {name: 'Hotel', image: require('../../Assets/Images/hotel-building.png')},
    {name: 'Flight', image: require('../../Assets/Images/aeroplane.png')},
    {name: 'Tour', image: require('../../Assets/Images/location-pin.png')},
    {name: 'Car', image: require('../../Assets/Images/sports-car.png')},
  ];
  const splitCategories = (arr, chunkSize = 4) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  };
  return (
    <ScrollView bounces={false} style={{flex: 1}}>
      <View style={{height: height / 2.5, minHeight: 300}}>
        <View style={{height: '50%'}}>
          <ImageBackground
            style={{flex: 1}}
            source={{
              uri: 'https://image.freepik.com/free-photo/old-compass-magnifying-glass-sand-clock-vintage-map_33799-7542.jpg',
            }}>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.3)'}}></View>
          </ImageBackground>
        </View>
        <View style={styles.floatingCard}>
          <CustomInput
            style={{fontSize: 18}}
            placeholder="What are you looking for ?"
          />
          {splitCategories(data).map(cat => (
            <View style={styles.row}>
              {cat.map(item => (
                <View style={{alignItems: 'center'}}>
                  <View style={styles.iconContainer}>
                    <Image source={item.image} style={styles.iconImage} />
                  </View>
                  <Text style={{color: colors.greyText, marginTop: 2}}>
                    {item.name}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        {[...Array(2)].map(item => (
          <HomeCardCarousel data={data} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  iconImage: {width: 20, height: 20},
  iconContainer: {
    padding: 10,
    backgroundColor: colors.greyInput,
    borderRadius: 20,
  },
  marginTop: {
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  floatingCard: {
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
    padding: 15,
    bottom: 0,
    elevation: 5,
    maxWidth: 500,
  },
});

export default Home;
