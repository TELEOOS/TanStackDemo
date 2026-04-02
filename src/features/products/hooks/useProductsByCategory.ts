import { useQuery } from '@tanstack/react-query';
import { getProductsByCategory } from '../api/product.api';

export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['products', 'category', category],
    queryFn: () => getProductsByCategory(category),
    enabled: !!category.trim(),
  });
};
