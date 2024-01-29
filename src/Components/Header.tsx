import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';
import SearchInput from './SearchInput';
import CartButton from './CartButton';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TopView}>
        <View>
          <Text style={styles.text}>Deliver to</Text>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Text style={styles.text}>Lucknow 226201</Text>
            <Icon name="caret-down" color="#fff" size={14} />
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: 30}}>
          <Icon name="bell" color="#fff" size={24} />
          <Icon name="wallet" color="#fff" size={24} />
          <Icon name="circle-user" color="#fff" size={24} />
        </View>
      </View>
      <View style={styles.BottomView}>
        <SearchInput placeholder="Search Medicines/Lab Tests/ Doctors" />
        <CartButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d6c6e',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  TopView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  BottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default Header;
