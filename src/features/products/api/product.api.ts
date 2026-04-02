import { ProductsResponse } from '@Productstypes/product.types';
import { api } from '../../../shared/api/client';
import {
  CreateProductResponse,
  CreateProductPayload,
} from '../types/product.types';

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
export const getProductCategories = async (): Promise<string[]> => {
  const response = await api.get<string[]>('/products/category-list');
  return response.data;
};

export const getProductsByCategory = async (
  category: string,
): Promise<ProductsResponse> => {
  const response = await api.get<ProductsResponse>(
    `/products/category/${encodeURIComponent(category)}`,
  );
  return response.data;
};

export const createProduct = async (
  payload: CreateProductPayload,
): Promise<CreateProductResponse> => {
  const response = await api.post<CreateProductResponse>(
    '/products/add',
    payload,
  );

  return response.data;
};

import {
  UpdateProductPayload,
  UpdateProductResponse,
} from '@Productstypes/product.types';

export const updateProduct = async (
  id: number,
  payload: UpdateProductPayload,
): Promise<UpdateProductResponse> => {
  const response = await api.put<UpdateProductResponse>(
    `/products/${id}`,
    payload,
  );

  return response.data;
};
