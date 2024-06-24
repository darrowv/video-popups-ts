import { combineReducers } from "@reduxjs/toolkit";
import { SET_EVENTS, SET_VIDEO_PLAYBACK_TIME } from "./actions";

const eventsReducer = (state = [], action: any) => {
  switch (action.type) {
    case SET_EVENTS:
      return action.events;
    default:
      return state;
  }
};

const videoPlaybackTimeReducer = (state: number | null = 0, action: any) => {
  switch (action.type) {
    case SET_VIDEO_PLAYBACK_TIME:
      return action.timestamp;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  events: eventsReducer,
  videoPlaybackTime: videoPlaybackTimeReducer,
});

export default rootReducer;
