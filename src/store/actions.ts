export const FETCH_EVENTS = "FETCH_EVENTS";
export const SET_EVENTS = "SET_EVENTS";
export const SET_VIDEO_PLAYBACK_TIME = "SET_VIDEO_PLAYBACK_TIME";

export const fetchEvents = () => ({ type: FETCH_EVENTS });
export const setEvents = (events: any) => ({ type: SET_EVENTS, events });
export const setVideoPlaybackTime = (timestamp: number | null) => ({
  type: SET_VIDEO_PLAYBACK_TIME,
  timestamp,
});
