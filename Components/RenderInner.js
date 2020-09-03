import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
Feather.loadFont();

const width = Dimensions.get('window').width;

const renderInner = ({sheetRef}) => {
  console.log('pros', sheetRef);
  const ClearDisplay = () => {
    sheetRef.current.snapTo(2);
  };
  return (
    <View style={styles.inner}>
      <View style={styles.panel}>
        <Text style={[styles.text, {marginBottom: 5, color: '#333'}]}>
          Upload Photo
        </Text>
        <Text style={styles.subText}>Choose your Photo</Text>
      </View>
      <TouchableOpacity style={styles.panelBtn}>
        <Feather name="camera" size={24} />
        <Text style={styles.text}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelBtn}>
        <Text style={styles.text}>Take From Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelBtn} onPress={ClearDisplay}>
        <Text style={styles.text}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },

  inner: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  panel: {
    alignItems: 'center',
  },
  subText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
  panelBtn: {
    width: width - 60,
    height: 50,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 8,
    paddingHorizontal: 5,
  },
});

export default renderInner;
