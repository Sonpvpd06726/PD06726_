// DetailScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { name } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chào mừng {name} đến màn hình chi tiết!</Text>
      <Button title="Quay lại" onPress={() => navigation.goBack()} />
      <Button title="Reset" onPress={() => navigation.navigate('MainScreen')} />
      <Button title="Pop" onPress={() => navigation.pop()} />
      <Button title="PopToTop" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default DetailScreen;
