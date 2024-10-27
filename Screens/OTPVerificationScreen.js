import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function OTPVerificationScreen() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically focus on the next input if not empty
    if (text && index < otp.length - 1) {
      refs[index + 1].focus();
    }
  };

  let refs = [];

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={{ uri: 'https://icon-library.com/images/security-icon/security-icon-24.jpg' }}
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>SẮC THỰC OTP</Text>
      <Text style={styles.subtitle}>
        Vui lòng nhập mã số chúng tôi đã gửi cho bạn qua email linhdtaph35049@fpt.edu.vn. Mã sắc thực có giá trị trong 120s
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((item, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={item}
            onChangeText={(text) => handleChange(text, index)}
            ref={(ref) => refs.push(ref)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>TIẾP TỤC</Text>
      </TouchableOpacity>
      <Text style={styles.resendText}>
        Chưa nhận được mã? <Text style={styles.resendLink}>Gửi lại!</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    width: '100%',
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#4e4b66',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendText: {
    marginTop: 20,
    fontSize: 14,
    color: '#666',
  },
  resendLink: {
    color: '#4e4b66',
    fontWeight: 'bold',
  },
});
