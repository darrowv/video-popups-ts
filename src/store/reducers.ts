import { combineReducers } from "@reduxjs/toolkit";
import { SET_EVENTS, SET_VIDEO_TIMESTAMP } from "./actions";

const eventsReducer = (state = [], action: any) => {
  switch (action.type) {
    case SET_EVENTS:
      return action.events;
    default:
      return state;
  }
};

const videoTimestampReducer = (state: number | null = 0, action: any) => {
  switch (action.type) {
    case SET_VIDEO_TIMESTAMP:
      return action.timestamp;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  events: eventsReducer,
  videoTimestamp: videoTimestampReducer,
});

export default rootReducer;
