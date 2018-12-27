import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 5e2bb786c9c1fb26d4745702a96291fc60621889e9afa7e6df595b272849375e"
  }
});
