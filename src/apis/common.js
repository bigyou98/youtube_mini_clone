import axios from "axios";
import { settings } from "constants/settings";

const common = {
  get: async (url) => {
    return axios.get(settings.apiUrl + url, {
      headers: {},
    });
  },
};

export default common;
