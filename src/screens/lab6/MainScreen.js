// MainScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const MainScreen = ({ navigation }) => {
  const [name, setName] = useState('');

  const navigateToDetailScreen = () => {
    navigation.navigate('DetailScreen', { name });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chào mừng bạn đến với ứng dụng!</Text>
      <TextInput
        placeholder="Nhập tên của bạn"
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ borderWidth: 1, margin: 10, padding: 8, width: 200 }}
      />
      <Button title="Đi tới màn hình chi tiết" onPress={navigateToDetailScreen} />
    </View>
  );
};

export default MainScreen;
