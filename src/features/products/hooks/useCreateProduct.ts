import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CreateProductPayload } from '../types/product.types';
import { createProduct } from '../api/product.api';

export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: CreateProductPayload) => createProduct(payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },

    onError: error => {
      console.log('Create product error:', error);
    },
  });
};
