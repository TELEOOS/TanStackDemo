import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/product.api';

export const useProducts = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return { data, isError, isLoading };
};
