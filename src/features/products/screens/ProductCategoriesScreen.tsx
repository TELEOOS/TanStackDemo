import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { useProductCategories } from '../hooks/useProductCategories';
import { useProductsByCategory } from '../hooks/useProductsByCategory';
import ProductCard from '../components/ProductCard';

const ProductCategoriesScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useProductCategories();

  const {
    data: productsResponse,
    isLoading: isProductsLoading,
    isError: isProductsError,
  } = useProductsByCategory(selectedCategory);

  const products = productsResponse?.products ?? [];

  if (isCategoriesLoading) {
    return (
      <View style={styles.centerContent}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isCategoriesError) {
    return (
      <View style={styles.centerContent}>
        <Text>Error loading categories</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categories ?? []}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesList}
        renderItem={({ item }) => {
          const isSelected = item === selectedCategory;

          return (
            <Pressable
              onPress={() => setSelectedCategory(item)}
              style={[
                styles.categoryButton,
                isSelected && styles.categoryButtonSelected,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  isSelected && styles.categoryTextSelected,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          );
        }}
      />

      {!selectedCategory ? (
        <View style={styles.centerContent}>
          <Text>Select a category</Text>
        </View>
      ) : isProductsLoading ? (
        <View style={styles.centerContent}>
          <ActivityIndicator size="large" />
        </View>
      ) : isProductsError ? (
        <View style={styles.centerContent}>
          <Text>Error loading category products</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.productsList}
        />
      )}
    </View>
  );
};

export default ProductCategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
  },
  categoriesList: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f1f1f1',
    marginRight: 8,
  },
  categoryButtonSelected: {
    backgroundColor: '#222',
  },
  categoryText: {
    color: '#222',
    fontSize: 14,
    fontWeight: '500',
  },
  categoryTextSelected: {
    color: '#fff',
  },
  productsList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    gap: 12,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
