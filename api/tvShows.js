const loopMovies = require("../utils/loopMovies");

module.exports = async (req, res) => {
  const endPoint = "/tv";
  try {
    const tvshows = await loopMovies(endPoint);

    res.json(tvshows);
  } catch (error) {
    console.log(error);
  }
};
