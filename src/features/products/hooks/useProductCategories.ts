import { useQuery } from '@tanstack/react-query';
import { getProductCategories } from '../api/product.api';

export const useProductCategories = () => {
  return useQuery({
    queryKey: ['products', 'categories'],
    queryFn: getProductCategories,
  });
};
