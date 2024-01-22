import React, { useState } from 'react';
import { ScrollView, View, Text, StatusBar, StyleSheet, RefreshControl } from 'react-native';

const App = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    // Thực hiện các thao tác cần khi người dùng kéo xuống để tải lại
    // Ví dụ: Thay đổi màu status bar
    setRefreshing(true);
    setTimeout(() => {
      // Simulate an async task
      setRefreshing(false);
      StatusBar.setBackgroundColor('blue');
      StatusBar.setBarStyle('light-content');
    }, 2000);
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={['blue']} />
      }>
      <StatusBar backgroundColor="green" barStyle="dark-content" />

      {/* Nội dung của ứng dụng */}
      <View style={styles.content}>
        <Text>Scrollable Content Goes Here</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
});

export default App;
