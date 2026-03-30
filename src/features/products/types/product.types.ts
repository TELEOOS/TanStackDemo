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
