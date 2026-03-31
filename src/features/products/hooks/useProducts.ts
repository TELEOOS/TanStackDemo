import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/product.api';

export const useProducts = () => {
  const { data, isLoading, isError, refetch, isRefetching } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  return { data, isLoading, isError, refetch, isRefetching };
};
