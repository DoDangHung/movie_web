import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api-for-movie.herokuapp.com/phimle",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
