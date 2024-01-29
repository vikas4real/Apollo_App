import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

const SearchInput = (props: any) => {
  const [searchValue, setSearchValue] = useState<string>('');
  return (
    <View style={styles.InputContainer}>
      <Icon name="magnifying-glass" color="#1d6c6e" size={24} />
      <TextInput
        value={searchValue}
        placeholder={props.placeholder}
        placeholderTextColor="#BDC3C7"
        onChangeText={txt => setSearchValue(txt)}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    width: Dimensions.get('screen').width * 0.75,
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 10,
  },
});
