import { create } from "zustand";
import type { State } from "./state.types";

export const useProductList = create<State>()(() => ({
  searchTerm: "",
  pageSize: 10,
  page: 1,
}));
