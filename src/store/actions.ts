export const FETCH_EVENTS = "FETCH_EVENTS";
export const SET_EVENTS = "SET_EVENTS";
export const SET_VIDEO_TIMESTAMP = "SET_VIDEO_TIMESTAMP";

export const fetchEvents = () => ({ type: FETCH_EVENTS });
export const setEvents = (events: any) => ({ type: SET_EVENTS, events });
export const setVideoTimestamp = (timestamp: number | null) => ({
  type: SET_VIDEO_TIMESTAMP,
  timestamp,
});
