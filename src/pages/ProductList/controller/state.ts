import { create } from "zustand";
import type { State } from "./state.types";
import { initialState } from "./state.constants";

export const useProductList = create<State>()(() => initialState);
