import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const CartButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="cart-shopping" color="#fff" size={30} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    padding: 5,
    backgroundColor: '#327c7c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
});
export default CartButton;
