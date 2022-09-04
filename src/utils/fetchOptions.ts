import axios from "axios";
import { VideoResponse } from "../interfaces";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const API_KEY = import.meta.env.VITE_REACT_APP_RAPID_API_KEY;

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// this function is used to fetch the data from the API
// channels, playlists and videos and details
export const fetchOptions = async (query: string) => {
  const { data } = await axios.get<VideoResponse>(
    `${BASE_URL}/${query}`,
    options
  );
  return data;
};
