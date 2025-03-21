import type { Product } from "../types/Product.types";

export type ProductListQueryArgs = {
  limit: number;
  searchTerm: string;
  offset: number;
};

export type ProductListQueryResults = {
  limit: number;
  skip: number;
  total: number;
  products: Product[];
};
