import { ApolloProvider } from "@apollo/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import { client } from "./apollo";
import { Home } from "./pages/Home/Home";
import { MissionLauncher } from "./pages/Mission/MissionLauncher";
import { ProductListPage } from "./pages/ProductList/ProductListPage";
import { queryClient } from "./react-query";

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/mission">Last Mission</NavLink>
            <NavLink to="/products">Products</NavLink>
          </nav>

          <Routes>
            <Route path="" element={<Home />} />
            <Route path="mission" element={<MissionLauncher />} />
            <Route path="products" element={<ProductListPage />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ApolloProvider>
  );
};
