export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type CreateProductPayload = {
  title: string;
};

export type CreateProductResponse = {
  id: number;
  title: string;
};
export type UpdateProductPayload = {
  title: string;
};

export type UpdateProductVariables = {
  id: number;
  payload: UpdateProductPayload;
};

export type UpdateProductResponse = {
  id: number;
  title: string;
};
