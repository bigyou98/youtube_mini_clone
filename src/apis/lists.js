import api from "./common";
import { settings } from "../constants/index";

export const listApi = {
  mostPopularVideos: async (params) => {
    return await api.get(
      `/videos?part=snippet&chart=mostPopular&maxResults=${params}&key=${settings.apiKey}`
    );
  },
};
