import React from 'react';

import {View, Image, StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

const renderItem = ({item}) => (
  <View style={styles.imageHeader}>
    <Image source={item.url} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  imageHeader: {
    marginTop: 10,
    borderRadius: 8,
  },
  image: {
    height: 250,
    width: width - 60,
    borderRadius: 8,
    resizeMode: 'contain',
  },
});
export default renderItem;
