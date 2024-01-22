import React from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Dữ liệu danh bạ mẫu
const data = [
  {
    name: 'Phạm Văn Sơn',
    email: 'Phamson@gmail.com',
    position: 'Developer',
    photo: 'https://phongvu.vn/cong-nghe/wp-content/uploads/2020/05/thuongthuong_phongvu-420x420.jpg',
  },
  {
    name: 'nguyễn Văn hải',
    email: 'vanhai@example.com',
    position: 'Designer',
    photo: 'https://toigingiuvedep.vn/wp-content/uploads/2021/02/anh-icon-facebook-cute-dep.jpg',
  },{
    name: 'Bùi Tuấn Kiệt',
    email: 'kietbui973@example.com',
    position: 'photograper',
    photo: 'https://thuthuatnhanh.com/wp-content/uploads/2020/02/icon-ong-bee-them-an.jpg',
  },
  
];

const ContactItem = ({ contact }) => (
  <View style={styles.listItem}>
    <Image source={{ uri: contact.photo }} style={styles.avatar} />
    <View style={styles.bodyItem}>
      <Text style={styles.nameText}>{contact.name}</Text>
      <Text>{contact.position}</Text>
    </View>
    <TouchableOpacity style={styles.btnCall} onPress={() => console.log('Calling ', contact.name)}>
      <Text style={styles.callText}>Call</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ContactItem contact={item} />}
        keyExtractor={(item) => item.email}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  bodyItem: {
    flex: 1,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btnCall: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  callText: {
    color: 'white',
  },
});

export default App;
