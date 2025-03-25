import { create } from "zustand";

export const useShop = create<{
  searchTerm: string;
  pageSize: number;
  page: number;
  reviewing: {
    hasShownInterest: boolean;
    productId: number | null;
  };
  buying: {
    hasIntent: boolean;
    productId: number | null;
  };
}>()(() => ({
  searchTerm: "",
  pageSize: 10,
  page: 1,
  reviewing: {
    hasShownInterest: false,
    productId: null,
  },
  buying: {
    hasIntent: false,
    productId: null,
  },
}));
