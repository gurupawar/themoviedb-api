const loopMovies = require("../utils/loopMovies");

module.exports = async (req, res) => {
  const endPoint = "/movie/top-rated";
  try {
    const topRated = await loopMovies(endPoint);
    res.json(topRated);
  } catch (error) {
    console.log(error);
  }
};
