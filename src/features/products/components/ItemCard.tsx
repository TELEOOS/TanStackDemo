import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Product } from '../types/product.types';

const ItemCard = ({ item }: { item: Product }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    height: 100,
    marginBottom: 5,
    borderBlockColor: '#000',
    backgroundColor: 'pink',
  },
  title: {
    color: '#feff',
  },
  description: {
    color: '#000',
    fontFamily: 'cursive',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});
