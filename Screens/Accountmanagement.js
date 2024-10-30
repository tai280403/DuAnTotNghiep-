import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

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
          <Image source={require('../acssets/tt.png')} style={styles.icon} />
          <Text style={styles.optionText}>Chỉnh sửa thông tin</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Image source={require('../acssets/ct.png')} style={styles.icon} />
          <Text style={styles.optionText}>Thông tin liên hệ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Image source={require('../acssets/tb.png')} style={styles.icon} />
          <Text style={styles.optionText}>Nhắn tin trực tiếp</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Image source={require('../acssets/qa.png')} style={styles.icon} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 60,
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
  icon: {
    width: 24,
    height: 24,
    marginRight: 20,
  },
  optionText: {
    fontSize: 16,
  },
});

export default AccountManagement;
