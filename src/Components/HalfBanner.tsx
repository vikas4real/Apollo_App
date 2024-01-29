import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const HalfBanner = (props: any) => {
  return (
    <View style={styles.container}>
      <Image
        style={{height: 60, width: 60, resizeMode: 'contain'}}
        source={props.imgPath}
      />
      <View
        style={[
          styles.RightView,
          !props.subtitle ? {justifyContent: 'center'} : {},
        ]}>
        {props.subtitle ? (
          <ImageBackground
            imageStyle={{
              width: 75,
              resizeMode: 'stretch',
            }}
            style={styles.RibbonStyle}
            source={require('../assets/ribbonleft.png')}>
            <Text style={styles.RibbonText}>{props.subtitle}</Text>
          </ImageBackground>
        ) : (
          <></>
        )}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text numberOfLines={2} style={styles.title}>
            {props.title}
          </Text>
          <Icon name="chevron-right" color="#1d6c6e" size={16} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  RightView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  RibbonStyle: {
    padding: 5,
    justifyContent: 'center',
    marginTop: -10,
    marginRight: -25,
  },
  RibbonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },

  title: {
    flex: 1,
    flexWrap: 'wrap',
    color: '#1d6c6e',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default HalfBanner;
