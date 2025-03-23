import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/page";
import { BrowserRouter } from "react-router";
import { client } from "./clients/apollo";
import { queryClient } from "./clients/react-query";
import { ApolloProvider } from "@apollo/client";
import { QueryClientProvider } from "@tanstack/react-query";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </ApolloProvider>
  </React.StrictMode>
);
