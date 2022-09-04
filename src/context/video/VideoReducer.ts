import { VideoState } from "./VideoProvider";
import { Item } from "../../interfaces";

type VideoActionType =
  | { type: "[Video] - Load Videos" }
  | { type: "[Video] - Set Category"; payload: string }
  | { type: "[Video] - Set Videos"; payload: Item[] }
  | { type: "[Video] - Set VideosDetails"; payload: Item[] };

export const VideoReducer = (
  state: VideoState,
  action: VideoActionType
): VideoState => {
  switch (action.type) {
    case "[Video] - Load Videos":
      return {
        ...state,
      };
    case "[Video] - Set Category":
      return {
        ...state,
        selected: action.payload,
      };
    case "[Video] - Set Videos":
      return {
        ...state,
        videos: action.payload,
      };
    case "[Video] - Set VideosDetails":
      return {
        ...state,
        videosDetails: action.payload,
      };

    default:
      return state;
  }
};
