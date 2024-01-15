export interface SupportData {


  adsbUpdatesFeed: {
    service: string;
    status: string;
  },

  flightSchedulesFeed: {
    maxAvailableLocalDate: Date;
    minAvailableLocalDate: Date;
    service: string;
    status: string;
  },

  liveFlightUpdatesFeed: {
    service: string;
    status: string;
  }
}
