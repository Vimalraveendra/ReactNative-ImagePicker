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
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import renderInner from './Components/RenderInner';
import renderHeader from './Components/RenderHeader';

const width = Dimensions.get('window').width;

const App = () => {
  const [ListItem, setListItem] = useState([]);
  const sheetRef = React.useRef(null);
  const fall = new Animated.Value(1);
  const renderItem = () => {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  };

  const AddImage = () => {
    sheetRef.current.snapTo(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React Native Add Image</Text>
      <FlatList
        data={ListItem}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        extraData={ListItem}
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={[300, 0, 0]}
        renderContent={() => renderInner({sheetRef})}
        renderHeader={renderHeader}
        initialSnap={1}
        borderRadius={10}
        callbackNode={fall}
        enabledGestureInteraction={false}
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
