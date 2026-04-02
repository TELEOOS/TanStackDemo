import React, { useState } from 'react';
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useCreateProduct } from '../hooks/useCreateProduct';

const CreateProductForm = () => {
  const [title, setTitle] = useState('');
  const { mutate, isPending, isSuccess, isError, data, error } =
    useCreateProduct();

  const handleCreateProduct = () => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    mutate(
      { title: trimmedTitle },
      {
        onSuccess: () => {
          setTitle('');
        },
      },
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="New product title..."
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <Pressable
        onPress={handleCreateProduct}
        style={styles.button}
        disabled={isPending}
      >
        {isPending ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Add Product</Text>
        )}
      </Pressable>

      {isSuccess && data ? (
        <Text style={styles.successText}>
          Product created: {data.title} (id: {data.id})
        </Text>
      ) : null}

      {isError ? (
        <Text style={styles.errorText}>
          Error creating product
          {error instanceof Error ? `: ${error.message}` : ''}
        </Text>
      ) : null}
    </View>
  );
};

export default CreateProductForm;

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
    backgroundColor: '#222',
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
