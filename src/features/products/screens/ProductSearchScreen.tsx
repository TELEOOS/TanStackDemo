import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import { IconSearch } from '@tabler/icons-react-native';

import { useSearchProducts } from '../hooks/useSearchProducts';
import ProductCard from '../components/ProductCard';

const ProductsSearchScreen = () => {
  const [search, setSearch] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState('');

  const { data, isLoading, isError } = useSearchProducts(submittedSearch);

  const handleSearch = () => {
    setSubmittedSearch(search.trim());
  };

  const products = data?.products ?? [];

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="Search products..."
          value={search}
          onChangeText={setSearch}
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
        />

        <Pressable onPress={handleSearch} style={styles.searchButton}>
          <IconSearch size={20} color="#ccc" />
        </Pressable>
      </View>

      {!submittedSearch ? (
        <View style={styles.centerContent}>
          <Text>Appuie sur l’icône pour lancer la recherche</Text>
        </View>
      ) : isLoading ? (
        <View style={styles.centerContent}>
          <ActivityIndicator size="large" />
        </View>
      ) : isError ? (
        <View style={styles.centerContent}>
          <Text>Erreur lors de la recherche</Text>
        </View>
      ) : products.length === 0 ? (
        <View style={styles.centerContent}>
          <Text>Aucun produit trouvé</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <ProductCard product={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default ProductsSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  searchButton: {
    paddingLeft: 10,
    paddingVertical: 8,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
