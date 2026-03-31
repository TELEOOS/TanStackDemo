import { useQuery } from '@tanstack/react-query';
import { searchProducts } from '../api/product.api';

export const useSearchProducts = (search: string) => {
  return useQuery({
    queryKey: ['products', search],
    queryFn: () => searchProducts(search),
    enabled: !!search.trim(),
  });
};
