import { gql } from "@apollo/client";

export const GET_LATEST_LAUNCH = gql`
  query GetLatestLaunch {
    launchLatest {
      mission_name
      launch_date_utc
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;
