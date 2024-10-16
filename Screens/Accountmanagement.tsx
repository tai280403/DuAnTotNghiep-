import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const AccountManagement = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.avatar}></View>
        <Text style={styles.name}>NGUYỄN VĂN A</Text>
        <Text style={styles.id}>ID: 0336394558</Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <Icon name="user" size={24} color="#000" />
          <Text style={styles.optionText}>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Icon name="phone" size={24} color="#000" />
          <Text style={styles.optionText}>Thông tin liên hệ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Icon name="envelope" size={24} color="#000" />
          <Text style={styles.optionText}>Nhắn tin trực tiếp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Icon name="question-circle" size={24} color="#000" />
          <Text style={styles.optionText}>FAQ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 60, // Khoảng cách giữa phần profile và các tùy chọn bên dưới
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#000',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  id: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  optionsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 25,
    marginTop: 15,
    width: '90%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 20,
  },
});

export default AccountManagement;
