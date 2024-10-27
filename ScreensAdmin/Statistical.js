import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Cần cài đặt thư viện react-native-vector-icons

const StatisticalScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="black" style={styles.backIcon} />
        <Text style={styles.headerTitle}>thống kê</Text>
      </View>

      {/* Thống kê hình ảnh */}
      <View style={styles.statisticsImageContainer}>
        <Image source={require('./assets/statistics_banner.png')} style={styles.statisticsImage} />
        <Text style={styles.statisticsText}>THỐNG KÊ</Text>
      </View>

      {/* Logo */}
      <Image source={require('./assets/lapstore_logo.png')} style={styles.logo} />

      {/* Từ ngày - Đến ngày */}
      <View style={styles.dateContainer}>
        <View style={styles.dateItem}>
          <Text style={[styles.dateLabel, { color: '#003CFF' }]}>Từ ngày</Text>
          <Text style={styles.dateValue}>22/12/2023</Text>
          <Image source={require('./assets/calendar_icon.png')} style={styles.dateIcon} />
        </View>
        <View style={styles.dateItem}>
          <Text style={[styles.dateLabel, { color: '#FF9B00' }]}>Đến ngày</Text>
          <Text style={styles.dateValue}>22/12/2023</Text>
          <Image source={require('./assets/calendar_icon.png')} style={styles.dateIcon} />
        </View>
      </View>

      {/* Doanh thu */}
      <View style={styles.revenueContainer}>
        <Text style={styles.revenueLabel}>Doanh thu:</Text>
        <Text style={styles.revenueValue}>28.000.000 VNĐ</Text>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  statisticsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  statisticsImage: {
    width: '80%',
    height: 80,
    resizeMode: 'contain',
  },
  statisticsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A5EFF',
    position: 'absolute',
    bottom: 10,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  dateItem: {
    alignItems: 'center',
  },
  dateLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateValue: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 5,
  },
  dateIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  revenueContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  revenueLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginRight: 10,
  },
  revenueValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    marginTop: 'auto',
  },
});

export default StatisticalScreen;
