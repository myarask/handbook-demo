import { http } from "msw";
import { setupServer } from "msw/node";
import page1 from "./page1.json";
import page2 from "./page2.json";
import page19 from "./page19.json";
import page20 from "./page20.json";
import search from "./page1search.json";
import product1 from "./product1.json";

const server = setupServer(
  http.get("https://dummyjson.com/products/search", ({ request }) => {
    const url = new URL(request.url);
    const skip = url.searchParams.get("skip");
    const q = url.searchParams.get("q");
    const limit = url.searchParams.get("limit");

    if (skip === "0" && !q && limit === "10") {
      return Response.json(page1);
    }
    if (skip === "10" && !q && limit === "10") {
      return Response.json(page2);
    }
    if (skip === "180" && !q && limit === "10") {
      return Response.json(page19);
    }
    if (skip === "190" && !q && limit === "10") {
      return Response.json(page20);
    }
    if (skip === "0" && q === "lap" && limit === "10") {
      return Response.json(search);
    }
  }),
  http.get("https://dummyjson.com/products/1", () => {
    return Response.json(product1);
  })
);

// Enable request interception.
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
