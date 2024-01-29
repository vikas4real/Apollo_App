import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const FullBanner = (props: any) => {
  return (
    <TouchableOpacity style={styles.container}>
      {props.RibbonimgPath ? (
        <View style={styles.TopView}>
          <ImageBackground
            style={styles.RibbonStyle}
            source={props.RibbonimgPath}>
            <Text style={styles.RibbonText}>{props.subtitle1}</Text>
          </ImageBackground>
          <Text style={styles.subtitle2}>
            <Text style={{opacity: 0.5, fontSize: 10}}>through </Text>
            {props.subtitle2}
          </Text>
        </View>
      ) : (
        <></>
      )}

      <View style={styles.BottomView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{height: 50, width: 50, resizeMode: 'contain'}}
            source={props.imgPath}
          />
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <Icon name="chevron-right" color="#1d6c6e" size={16} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  TopView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  RibbonStyle: {
    height: 25,
    width: 150,
    alignItems: 'flex-start',
    paddingLeft: 10,
    justifyContent: 'center',
  },
  RibbonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  subtitle2: {
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
    marginRight: 10,
  },
  BottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  title: {
    color: '#1d6c6e',
    fontSize: 16,
    fontWeight: '700',
  },
});
export default FullBanner;
