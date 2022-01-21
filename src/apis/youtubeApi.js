import api from "./common";

export const youtubeApi = {
  mostPopularVideos: async (params) => {
    return await api.get(
      `/videos?part=snippet&chart=mostPopular&maxResults=${params}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
  },
  search: async (params, keyword) => {
    return await api.get(
      `/search?part=snippet&maxResults=${params}&q=${keyword}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
  },
};
