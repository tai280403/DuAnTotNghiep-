import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, Button, CheckBox } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CommentScreen = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comment</Text>
      </View>

      {/* Product Info */}
      <View style={styles.productInfo}>
        <Image
          style={styles.productImage}
          source={{ uri: 'https://via.placeholder.com/80' }} // Hình mẫu sản phẩm
        />
        <View style={styles.productDetails}>
          <Text style={styles.productName}>Printed Shirt</Text>
          <Text style={styles.productCategory}>GEETA COLLECTION</Text>

          {/* Star Rating */}
          <View style={styles.starContainer}>
            {[...Array(5)].map((_, index) => (
              <Icon key={index} name="star-o" size={24} color="#000" />
            ))}
          </View>
          <Text style={styles.ratingLabel}>ĐÁNH GIÁ SẢN PHẨM NÀY</Text>
        </View>
      </View>

      {/* Comment Input */}
      <TextInput
        style={styles.commentInput}
        placeholder="Suy nghĩ của bạn về sản phẩm"
        multiline
      />

      {/* Add Image or Video */}
      <TouchableOpacity style={styles.addMediaButton}>
        <Icon name="camera" size={24} color="#000" />
        <Text style={styles.addMediaText}>Thêm ảnh hoặc video</Text>
      </TouchableOpacity>

      {/* Anonymous Option */}
      <View style={styles.anonymousOption}>
        <CheckBox value={isAnonymous} onValueChange={setIsAnonymous} />
        <Text>Đánh giá ẩn danh</Text>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>GỬI</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5B5B5B',
  },
  productCategory: {
    color: '#A9A9A9',
    marginBottom: 5,
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  ratingLabel: {
    fontSize: 12,
    color: '#A9A9A9',
  },
  commentInput: {
    height: 80,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#F0F0F0',
  },
  addMediaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  addMediaText: {
    marginLeft: 10,
    color: '#A9A9A9',
  },
  anonymousOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#FF3D00',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CommentScreen;
