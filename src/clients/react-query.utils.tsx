import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

export const mockQueryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

export const MockQueryClientProvider = (props: { children?: ReactNode }) => (
  <QueryClientProvider client={mockQueryClient} {...props} />
);
