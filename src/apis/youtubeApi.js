import api from "./common";
import { settings } from "constants/index";

export const youtubeApi = {
  mostPopularVideos: async (params) => {
    return await api.get(
      `/videos?part=snippet&chart=mostPopular&maxResults=${params}&key=${settings.apiKey}`
    );
  },
  search: async (params, keyword) => {
    return await api.get(
      `/search?part=snippet&maxResults=${params}&q=${keyword}&key=${settings.apiKey}`
    );
  },
};
