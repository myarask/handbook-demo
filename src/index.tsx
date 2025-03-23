import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { client } from "./clients/apollo";
import { queryClient } from "./clients/react-query";
import { ApolloProvider } from "@apollo/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./app/components/AppRouter";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </QueryClientProvider>
    </ApolloProvider>
  </React.StrictMode>
);
