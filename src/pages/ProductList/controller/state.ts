import { create } from "zustand";

export const useProductList = create<{
  searchTerm: string;
  pageSize: number;
  page: number;
}>()(() => ({
  searchTerm: "",
  pageSize: 10,
  page: 1,
}));
