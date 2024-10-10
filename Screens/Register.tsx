import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const Register = () => {
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* Hình ảnh chèn lên phía trên màn hình */}
        <Image
          source={require('./Ảnh chụp màn hình 2024-10-10 151633.png')} // Thay thế đường dẫn đến hình nền của bạn
          style={styles.image}
        />
        {/* Văn bản chèn lên trên hình ảnh */}
        <View style={styles.overlay}>
          <Text style={styles.welcomeText}>Get’s started with LapStore !</Text>
          <Text style={styles.descriptionText}>
            Create your account and start enjoying shopping
          </Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>LOG UP</Text>
         <Input
          placeholder='Your name'
          leftIcon={<Icon name='mail-outline' size={20} color='#7D7D7D' />}
          containerStyle={styles.input}
        /> 
        <Input
          placeholder='Enter your email'
          leftIcon={<Icon name='mail-outline' size={20} color='#7D7D7D' />}
          containerStyle={styles.input}
        />

        <Input
          placeholder='Enter your password'
          secureTextEntry
          leftIcon={<Icon name='lock-closed-outline' size={20} color='#7D7D7D' />}
          containerStyle={styles.input}
        />

        

        <Button
          title="SIGN UP"
          buttonStyle={styles.signInButton}
          titleStyle={styles.signInButtonText}
        />

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}> Already have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.createAccount}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  topContainer: {
    position: 'relative',
    width: '100%',
    height: 300, // Chiều cao phần hình ảnh
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Đảm bảo hình ảnh bao phủ toàn bộ phần đầu
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Hiệu ứng làm tối hình nền để văn bản rõ hơn
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // Màu trắng để nổi bật trên hình nền
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    marginHorizontal: 20,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  loginTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    marginBottom: 25,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
  },
  forgotPassword: {
    color: '#6A5ACD',
    fontSize: 14,
  },
  signInButton: {
    backgroundColor: '#6A5ACD',
    paddingVertical: 15,
    borderRadius: 10,
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerText: {
    color: '#7D7D7D',
  },
  createAccount: {
    color: '#6A5ACD',
    marginLeft: 5,
  },
});

export default Register;
