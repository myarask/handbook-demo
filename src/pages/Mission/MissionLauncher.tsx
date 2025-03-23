import { useQuery } from "@apollo/client";
import { lazy, Suspense } from "react";
import { GET_LATEST_LAUNCH } from "./queries";

// Component is loaded asyncronously, allowing the parent bundle to be smaller.
const MissionPage = lazy(() => import("./MissionPage"));

export const MissionLauncher = () => {
  // Start fetching server data that the page will need.
  useQuery(GET_LATEST_LAUNCH);

  // The page component and its data are loading in parallel.
  return (
    <Suspense fallback={<>Loading...</>}>
      <MissionPage />
    </Suspense>
  );
};
