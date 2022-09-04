import { createContext } from 'react';
import { Item } from '../../interfaces';

interface ContextProps {
    selected: string;
    setSelected: (value: string) => void;
    setVideos: (videos: Item[]) => void;
    videos: Item[];
    videosDetails: Item[];
    setVideoDetails: (video: Item[]) => void;
}

export const VideoContext = createContext({} as ContextProps)