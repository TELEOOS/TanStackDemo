import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProduct } from '../api/product.api';
import { UpdateProductVariables } from '../types/product.types';

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: UpdateProductVariables) =>
      updateProduct(id, payload),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },

    onError: error => {
      console.log('Update product error:', error);
    },
  });
};
