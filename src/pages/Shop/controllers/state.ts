import { create } from "zustand";

export const useShop = create<{
  searchTerm: string;
  pageSize: number;
  page: number;
  previewProductId: number | null;
  buyNowProductId: number | null;
}>()(() => ({
  searchTerm: "",
  pageSize: 10,
  page: 1,
  previewProductId: null,
  buyNowProductId: null,
}));
