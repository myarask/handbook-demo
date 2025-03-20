export interface LatestLaunch {
  launchLatest: {
    mission_name: string;
    launch_date_utc: string;
    rocket: {
      rocket_name: string;
      rocket_type: string;
    };
  };
}
