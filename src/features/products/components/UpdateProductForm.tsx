import React, { useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useUpdateProduct } from '../hooks/useUpdateProdcut';

const UpdateProductForm = () => {
  const [productId, setProductId] = useState('');
  const [title, setTitle] = useState('');

  const { mutate, isPending, isSuccess, isError, data, error } =
    useUpdateProduct();

  const handleUpdateProduct = () => {
    const trimmedTitle = title.trim();
    const parsedId = Number(productId);

    if (!trimmedTitle || !parsedId) {
      return;
    }

    mutate(
      {
        id: parsedId,
        payload: { title: trimmedTitle },
      },
      {
        onSuccess: () => {
          setProductId('');
          setTitle('');
        },
      },
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Product id..."
        value={productId}
        onChangeText={setProductId}
        keyboardType="numeric"
        style={styles.input}
      />

      <TextInput
        placeholder="New product title..."
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <Pressable
        onPress={handleUpdateProduct}
        style={styles.button}
        disabled={isPending}
      >
        {isPending ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Update Product</Text>
        )}
      </Pressable>

      {isSuccess && data ? (
        <Text style={styles.successText}>Product updated:</Text>
      ) : null}

      {isError ? (
        <Text style={styles.errorText}>
          Error updating product
          {error instanceof Error ? `: ${error.message}` : ''}
        </Text>
      ) : null}
    </View>
  );
};

export default UpdateProductForm;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#444',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  successText: {
    marginTop: 10,
    color: 'green',
  },
  errorText: {
    marginTop: 10,
    color: 'red',
  },
});
