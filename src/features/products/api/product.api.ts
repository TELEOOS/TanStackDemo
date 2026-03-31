import { api } from 'shared/api/client';
import { ProductsResponse } from '@Productstypes/product.types';

//La fonction getProducts est une fonction asynchrone qui utilise
//  l'instance d'axios pour
//  faire une requête GET à l'endpoint '/products'. Elle retourne
//  une promesse qui résout les données de la réponse, typées comme
//  ProductsResponse.
export const getProducts = async (): Promise<ProductsResponse> => {
  const response = await api.get<ProductsResponse>('/products');
  return response.data;
};

export const searchProducts = async (
  search: string,
): Promise<ProductsResponse> => {
  const response = await api.get<ProductsResponse>(
    `/products/search?q=${encodeURIComponent(search)}`,
  );
  return response.data;
};
