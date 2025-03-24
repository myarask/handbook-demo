import { create } from "zustand";

export const useProductList = create<{
  searchTerm: string;
  pageSize: number;
  page: number;
  previewProductId: number | null;
}>()(() => ({
  searchTerm: "",
  pageSize: 10,
  page: 1,
  previewProductId: null,
}));
