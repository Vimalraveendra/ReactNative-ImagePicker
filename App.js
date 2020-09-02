import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  Image,
} from 'react-native';

const width = Dimensions.get('window').width;

const App = () => {
  const [ListItem, setListItem] = useState([]);

  const renderItem = () => {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  };

  const AddImage = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React Native Add Image</Text>
      <FlatList
        data={ListItem}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        extraData={ListItem}
      />
      <TouchableOpacity style={styles.btn} onPress={AddImage}>
        <Text style={styles.btnText}>Add Image</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: 'green',
    height: 50,
    width: width - 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 4,
  },
  btnText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
});

export default App;
