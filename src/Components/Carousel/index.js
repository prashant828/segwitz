import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import colors from '../../Styles/colors';
import {width, height} from '../../Styles/dimensions';
class Carousel extends React.Component {
  state = {
    data: [
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        uri: 'https://pbs.twimg.com/profile_images/510921587709980672/6Lzw4gHK_400x400.jpeg',
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2019-12-10-at-12-14-03-pm-1575998085.png?crop=1xw:1xh;center,top&resize=480:*',
      },
      {
        id: 'qw',
        title: 'third item',
        uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-travel-index-1576001101.jpg?crop=0.502xw:1.00xh;0.255xw,0&resize=640:*',
      },
    ],
    activeSlide: 0,
  };
  timer;
  componentDidMount() {
    this.timer = setInterval(() => {
      this.beginSlide();
    }, 2500);
  }
  beginSlide = () => {
    this.flatRef.scrollToIndex({
      index:
        this.state.data.length - 1 == this.state.activeSlide
          ? 0
          : this.state.activeSlide + 1,
      animated: true,
    });
    this.setState(prev => ({
      activeSlide:
        this.state.data.length - 1 == prev.activeSlide
          ? 0
          : prev.activeSlide + 1,
    }));
  };
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  renderItem = ({item}) => (
    <View style={styles.item}>
      <Image
        style={{
          width: width / 1.8,
          height: width / 1.8,
          borderRadius: width / 1.8,
        }}
        source={{
          uri: item.uri,
        }}
      />
      <Text style={{fontSize: 16, color: 'grey', marginTop: 20}}>
        Picking your travel destinations
      </Text>
    </View>
  );
  render() {
    return (
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={e => {
            let contentOffset = e.nativeEvent.contentOffset;
            let viewSize = e.nativeEvent.layoutMeasurement;

            // Divide the horizontal offset by the width of the view to see which page is visible
            let pageNum = Math.floor(contentOffset.x / viewSize.width);
            clearInterval(this.timer);
            this.setState({activeSlide: pageNum});
            this.timer = setInterval(() => {
              this.beginSlide();
            }, 2500);
          }}
          bounces={false}
          ref={ref => (this.flatRef = ref)}
          horizontal
          pagingEnabled
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            marginTop: 40,
          }}>
          {this.state.data.map((item, i) => {
            return (
              <View
                style={{
                  height: 6,
                  marginRight: 5,
                  width: 6,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor:
                    this.state.activeSlide == i
                      ? colors.primary
                      : colors.greyLight,
                }}>
                {this.props.slice ? (
                  this.props.slice && this.state.activeSlide == i ? null : (
                    <View
                      style={{
                        height: 4,
                        width: 4,
                        borderRadius: 3,
                        backgroundColor: 'grey',
                      }}></View>
                  )
                ) : null}
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    width: width - 30,
    alignItems: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
  },
});

export default Carousel;
