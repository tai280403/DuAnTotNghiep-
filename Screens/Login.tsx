import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  const [rememberMe, setRememberMe] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* Hình ảnh chèn lên phía trên màn hình */}
        <Image
          source={require('./Ảnh chụp màn hình 2024-10-10 144406.png')} // Đặt đường dẫn tới hình nền của bạn
          style={styles.image}
        />
        {/* Văn bản chèn lên trên hình ảnh */}
        <View style={styles.overlay}>
          <Text style={styles.welcomeText}>Welcome Back!</Text>
          <Text style={styles.descriptionText}>
            Yay! You're back! Thanks for shopping with us. We have exciting deals and promotions going on, grab your pick now!
          </Text>
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.loginTitle}>LOG IN</Text>

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

        <View style={styles.optionsContainer}>
          <CheckBox
            title='Remember me'
            checked={rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
            containerStyle={styles.checkbox}
          />
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="SIGN IN"
          buttonStyle={styles.signInButton}
          titleStyle={styles.signInButtonText}
        />

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Not registered yet?</Text>
          <TouchableOpacity>
            <Text style={styles.createAccount}>Create an Account</Text>
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
    margin: '0',
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
    marginLeft: 10, // Lệch phải một chút
  },
  descriptionText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
    marginHorizontal: 20,
    marginLeft: 10, // Lệch phải một chút
  },
  formContainer: {
    paddingHorizontal: 20,
    marginTop: '30',
    paddingTop: '100',
  },
  loginTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop :20,
    marginLeft : 20,
    
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
    marginLeft: 10, // Lệch phải một chút
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
    marginLeft: 10, // Lệch phải một chút
  },
  createAccount: {
    color: '#6A5ACD',
    marginLeft: 15, // Lệch phải một chút
  },
});

export default LoginScreen;
