import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import type { ReactNode } from "react";

export const mockQueryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

export const TestQueryClientProvider = (props: { children?: ReactNode }) => (
  <QueryClientProvider client={mockQueryClient} {...props} />
);

export const renderWithProviders = (ui: ReactNode) => {
  return render(<TestQueryClientProvider>{ui}</TestQueryClientProvider>);
};
