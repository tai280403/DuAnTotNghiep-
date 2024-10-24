import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Thư viện icon

const PictureScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Some Pictures</Text>
      </View>

      {/* Content area - bỏ trống để hiển thị hình ảnh */}
      <View style={styles.content}></View>

      {/* Footer với button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="plus" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Add a comment..." />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    marginTop: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default PictureScreen;
