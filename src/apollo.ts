import {
  ApolloClient,
  createQueryPreloader,
  InMemoryCache,
} from "@apollo/client";
import { GET_LATEST_LAUNCH } from "./queries";

export const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

export const preloadQuery = createQueryPreloader(client);

// You may prefetch data needed in all sessions.
// This will start fetching data before the React app mounts.
// Careful, as this can add congestion to startup operations.
preloadQuery(GET_LATEST_LAUNCH);
