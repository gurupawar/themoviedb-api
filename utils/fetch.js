const axios = require("axios");
const BASE_URL = "https://www.themoviedb.org";

module.exports = async function fetchUrl(endPoint, id) {
  const { data } = await axios.get(`${BASE_URL}/${endPoint}/${id}`);
  return data;
};
