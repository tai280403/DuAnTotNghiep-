import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const users = [
  {
    id: '1',
    name: 'Bảy cỏ',
    phone: '0357103658',
    email: 'linhdtqph35049@fpt.edu.vn',
    avatar: 'https://images-cdn.9gag.com/photo/aD1b0Q7_700b.jpg', // Thay bằng link avatar thật
  },
  {
    id: '2',
    name: 'Nguyễn Văn A',
    phone: '0357103658',
    email: 'linhdtqph35049@fpt.edu.vn',
    avatar: 'https://images-cdn.9gag.com/photo/aD1b0Q7_700b.jpg',
  },
  {
    id: '3',
    name: 'Nguyễn Văn A',
    phone: '0357103658',
    email: 'linhdtqph35049@fpt.edu.vn',
    avatar: 'https://images-cdn.9gag.com/photo/aD1b0Q7_700b.jpg',
  },
  // Thêm các người dùng khác ở đây
];

const UserManagementScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Image source={require('../acssets/fix.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../acssets/bin.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../acssets/NextButton.png')} style={styles.iconnext} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quản lí người dùng</Text>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 14,
    color: '#666',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  iconnext: {
    width: 26,
    height: 14,
    marginHorizontal: 10,
  },
});

export default UserManagementScreen;
