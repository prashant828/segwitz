import React from 'react';
import {View, Text, FlatList, ImageBackground, StyleSheet} from 'react-native';
import {width, height} from '../../Styles/dimensions';
import colors from '../../Styles/colors';
import CustomButton from '../CustomButton';
const HomeCardCarousel = ({data}) => {
  const renderCard = ({item}) => {
    return (
      <View style={styles.item}>
        <ImageBackground
          imageStyle={styles.ImageBackground}
          style={styles.imageContainer}
          source={{
            uri: item.uri,
          }}>
          <View style={styles.imageOverlay}>
            <Text style={styles.subTitle}>Attraction and Activities</Text>
            <Text style={styles.title}>Barcelona</Text>
            <View style={{flexDirection: 'row'}}>
              <CustomButton
                style={styles.cardButton}
                title="Book Now"
                textStyle={{fontSize: 15, fontWeight: '600'}}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };
  return (
    <View style={{width: '90%', marginTop: 20}}>
      <Text style={{fontSize: 20, fontWeight: '600', marginBottom: 10}}>
        Promos Today
      </Text>
      <FlatList
        bounces={false}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={[
          {
            uri: 'https://image.freepik.com/free-photo/old-compass-magnifying-glass-sand-clock-vintage-map_33799-7542.jpg',
          },
          {
            uri: 'https://image.freepik.com/free-photo/old-compass-magnifying-glass-sand-clock-vintage-map_33799-7542.jpg',
          },
          {
            uri: 'https://image.freepik.com/free-photo/old-compass-magnifying-glass-sand-clock-vintage-map_33799-7542.jpg',
          },
        ]}
        renderItem={renderCard}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  marginTop: {
    marginTop: 10,
  },
  floatingCard: {
    shadowColor: 'black',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    height: '70%',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    position: 'absolute',
    padding: 15,
    bottom: 0,
    elevation: 5,
  },
  ImageBackground: {
    borderRadius: 10,
    maxWidth: 300,
    maxHeight: 400,
    width: width / 1.8,
    height: width / 1.4,
  },
  imageContainer: {
    width: width / 1.8,
    height: width / 1.4,
    maxWidth: 300,
    maxHeight: 400,
    borderRadius: 10,
    marginRight: 20,
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'flex-end',
  },
  subTitle: {
    color: colors.white,
    fontSize: 15,
    marginBottom: 2,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardButton: {
    flexDirection: 'row',
    width: '50%',
    height: 35,
    padding: 0,
  },
});

export default HomeCardCarousel;
