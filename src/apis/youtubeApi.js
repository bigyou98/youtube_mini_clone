import api from "./common";

export const youtubeApi = {
  mostPopularVideos: (params) => {
    return api.get(
      `/videos?part=snippet&chart=mostPopular&maxResults=${params}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
  },
  search: (params, keyword) => {
    return api.get(
      `/search?part=snippet&maxResults=${params}&q=${keyword}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
  },
};
