import { create } from "zustand";

export const usePage = create<{
  searchTerm: string;
  pageSize: number;
  page: number;
  preview: {
    isOpen: boolean;
    productId: number | null;
  };
  orderModal: {
    isOpen: boolean;
    productId: number | null;
  };
}>()(() => ({
  searchTerm: "",
  pageSize: 10,
  page: 1,
  preview: {
    isOpen: false,
    productId: null,
  },
  orderModal: {
    isOpen: false,
    productId: null,
  },
}));
