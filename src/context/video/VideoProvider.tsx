import { FC, useReducer } from 'react'
import { Item } from '../../interfaces';
import { VideoContext, VideoReducer } from '../index'
interface Props {
    children: JSX.Element
}

export interface VideoState {
    selected: string;
    videos: Item[];
    videosDetails: Item[];
}

export const Video_INITIAL_STATE: VideoState = {
    selected: '',
    videos: [],
    videosDetails: []
}

export const VideoProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(VideoReducer, Video_INITIAL_STATE)
    const setSelected = (value: string) => {
        dispatch({ type: '[Video] - Set Category', payload: value })
    }
    const setVideos = (videos: Item[]) => {
        dispatch({
            type: '[Video] - Set Videos',
            payload: videos
        })
    }
    const setVideoDetails = (video: Item[]) => {
        dispatch({
            type: '[Video] - Set VideosDetails',
            payload: video
        })
    }
    return (
        <VideoContext.Provider
            value={{
                ...state,
                setSelected,
                setVideos,
                setVideoDetails
            }}
        >
            {children}
        </VideoContext.Provider>
    );
};
