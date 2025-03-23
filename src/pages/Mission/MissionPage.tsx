import { useSuspenseQuery } from "@apollo/client";
import { GET_LATEST_LAUNCH } from "./queries";
import type { LatestLaunch } from "../../types";

const MissionPage = () => {
  // "loading" state is managed by an upstream Suspense component.
  // "error" state is managed by an upstream ErrorBoundary component.
  const { data } = useSuspenseQuery<LatestLaunch>(GET_LATEST_LAUNCH);

  return (
    <ul>
      <li>Mission Name: {data.launchLatest.mission_name}</li>
      <li>Launch Date: {data.launchLatest.launch_date_utc}</li>
      <li>Rocket Name: {data.launchLatest.rocket.rocket_name}</li>
      <li>Rocket Type: {data.launchLatest.rocket.rocket_type}</li>
    </ul>
  );
};

export default MissionPage;
