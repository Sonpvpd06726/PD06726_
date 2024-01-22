import React, { useState } from 'react';
import { View, Modal, StyleSheet, Text, TouchableOpacity, Alert, BackHandler } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleBackButton = () => {
    Alert.alert('Thông báo', 'Bạn đã tắt modal bằng nút back của thiết bị');
    setModalVisible(false);
    return true;
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

 
  React.useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showModal}>
        <Text style={styles.buttonText}>Mở Modal</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModal}>
        <View style={styles.centeredView}>
          {/* Nội dung modal ở đây */}
          <Text style={styles.modalText}>Hello word</Text>

          <TouchableOpacity onPress={hideModal}>
            <Text style={styles.buttonText}>Ẩn Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalText: {
    color: 'white',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;
