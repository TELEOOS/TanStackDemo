import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Product } from '../types/product.types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Image
        source={{ uri: product.thumbnail }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 5,
  },
  description: { marginTop: 5, fontSize: 14, color: '#433535' },
});
