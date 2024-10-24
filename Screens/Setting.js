import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Setting: React.FC = () => {
  return (
    <LinearGradient
      colors={['#1E1E2C', '#1D1D2C', '#0C0F14']}
      style={styles.container}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <StatusBar backgroundColor={'#0C0F14'} barStyle="light-content" />

          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.button}>
              <Image source={require('./assets/back.png')} />
            </TouchableOpacity>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-Regular',
                fontSize: 20,
                lineHeight: 36,
                fontWeight: '600',
              }}
            >
              Setting
            </Text>
            <View></View>
          </View>

          {/* Profile Section */}
          <View style={styles.profileSection}>
            <Image
              source={require('./assets/profile.jpg')}
              style={styles.profileImage}
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.profileName}>Lê Chiến</Text>
              <Text style={styles.profileEmail}>Chienle@gmail.com</Text>
            </View>
          </View>

          <View style={{ flex: 1, marginHorizontal: 20, marginTop: 30 }}>
            {/* Menu Items */}
            <MenuItem
              title="Orders"
              iconSource={require('./assets/cart.png')}
            />
            <MenuItem
              title="Wishlist"
              iconSource={require('./assets/favor.png')}
            />
            <MenuItem
              title="Delivery Address"
              iconSource={require('./assets/Deliceryaddress.png')}
            />
            <MenuItem
              title="Payment Methods"
              iconSource={require('./assets/Vectoricon.png')}
            />
            <MenuItem
              title="Promo Code"
              iconSource={require('./assets/PromoCordicon.png')}
            />
            <MenuItem
              title="Help"
              iconSource={require('./assets/helpicon.png')}
            />
            <MenuItem
              title="About"
              iconSource={require('./assets/thongbao.png')}
            />
            <MenuItem
              title="Log out"
              iconSource={require('./assets/Group6893.png')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
};

type MenuItemProps = {
  title: string;
  iconSource: any;
};

const MenuItem: React.FC<MenuItemProps> = ({ title, iconSource }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.iconContainer}>
      <Image style={styles.icon} tintColor="white" source={iconSource} />
    </View>
    <Text style={styles.menuText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#21262E',
    borderRadius: 10,
    borderWidth: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  profileName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    color: 'gray',
    fontSize: 14,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderBottomColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  iconContainer: {
    width: 25,
    height: 25,
    backgroundColor: '#D17842',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginRight: 40,
  },
  icon: {
    width: 15,
    height: 15,
  },
  menuText: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
  },
});

export default Setting;