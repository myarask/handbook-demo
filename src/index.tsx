import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { queryClient } from "./clients/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppRouter } from "./app/AppRouter";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
