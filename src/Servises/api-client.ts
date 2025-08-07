import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9b69869e30d04375bf34d9211a2c06b4",
  },
});
