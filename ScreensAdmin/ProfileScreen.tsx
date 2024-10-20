import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      
      {/* Header with Back Arrow and Title */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('../acssets/back.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chi tiết hồ sơ</Text>
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image source={require('../acssets/hihi.png')} style={styles.profileImage} />
        <Text style={styles.profileName}>NGUYỄN VĂN ADMIN</Text>
        <Text style={styles.profileId}>ID: 0336394558</Text>
      </View>

      {/* Editable Fields */}
      <View style={styles.fieldContainer}>
        
        {/* Email Field */}
        <View style={styles.fieldRow}>
          <Image source={require('../acssets/profile.png')} style={styles.fieldIcon} />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.fieldInput}
              value="Admin28043@gmail.com"
              editable={false}
            />
            <TouchableOpacity style={styles.editButton}>
              <Image source={require('../acssets/but.png')} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Password Field */}
        <View style={styles.fieldRow}>
          <Image source={require('../acssets/profile.png')} style={styles.fieldIcon} />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.fieldInput}
              value="admin123456"
              secureTextEntry
              editable={false}
            />
            <TouchableOpacity style={styles.editButton}>
              <Image source={require('../acssets/but.png')} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Phone Number Field */}
        <View style={styles.fieldRow}>
          <Image source={require('../acssets/profile.png')} style={styles.fieldIcon} />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.fieldInput}
              value="09813862714"
              editable={false}
            />
            <TouchableOpacity style={styles.editButton}>
              <Image source={require('../acssets/but.png')} style={styles.editIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Sign Out Button placed inside the blue section */}
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    backgroundColor: '#A7D5FF',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileId: {
    fontSize: 14,
    color: '#555',
  },
  fieldContainer: {
    backgroundColor: '#A7D5FF',
    borderRadius: 10,
    padding: 20,
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  fieldIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  inputContainer: {
    flex: 1,
    position: 'relative',
  },
  fieldInput: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD',
    paddingRight: 40, // Space for the icon
  },
  editButton: {
    position: 'absolute',
    right: 10, // Aligns the icon to the right side of the input
    top: '50%',
    transform: [{ translateY: -12 }], // Center the icon vertically
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  signOutButton: {
    backgroundColor: '#5A5A5A',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  signOutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
