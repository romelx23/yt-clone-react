import { useContext } from "react";
import { VideoContext } from "../context";
import { fetchOptions } from "../utils/fetchOptions";

export const useVideo = () => {
    const { setVideos, selected, setVideoDetails } = useContext(VideoContext);
    const loadVideos = async () => {
        try {
            const { items } = await fetchOptions(`search?part=snippet&q=${ selected }`);
            setVideos(items);
        } catch (error) {
            setVideos([]);
            console.log(error);
        }
    }
    const loadVideosByChannel = async (channelId: string) => {
        try {
            // const { items } = await fetchOptions(`channels?part=snippet&id=${channelId}`);
            const { items } = await fetchOptions(`search?channelId=${ channelId }&part=snippet&order=date&maxResults=20`);
            setVideos(items);
        } catch (error) {
            console.log(error)
        }
    }
    const loadVideosDetails = async (videoId: string) => {
        try {
            const { items } = await fetchOptions(`videos?part=snippet,statics&id=${ videoId }`);
            setVideoDetails(items);
        } catch (error) {
            setVideoDetails([]);
            console.log(error)
        }
    }
    const loadVideosRelated = async (videoId: string) => {
        try {
            const { items } = await fetchOptions(`search?part=snippet&relatedToVideoId=${ videoId }&type=video&maxResults=20`);
            setVideos(items);
        } catch (error) {
            setVideos([]);
            console.log(error)
        }
    }
    return {
        loadVideos,
        loadVideosByChannel,
        loadVideosDetails,
        loadVideosRelated
    }
}