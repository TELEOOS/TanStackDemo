import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  RefreshControl,
} from 'react-native';
import React from 'react';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';

const ProductsListScreen = () => {
  const { data, isError, isLoading, refetch, isRefetching } = useProducts();

  if (isLoading)
    return (
      <View style={styles.LoadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" animating={true} />
      </View>
    );
  if (isError)
    return (
      <View style={styles.ErrorContainer}>
        <Text>Error loading products</Text>
      </View>
    );
  return (
    <View style={styles.container}>
      <FlatList
        data={data?.products}
        keyExtractor={item => item.id.toString()}
        refreshControl={
          <RefreshControl onRefresh={refetch} refreshing={isRefetching} />
        }
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
};

export default ProductsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  LoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ErrorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
