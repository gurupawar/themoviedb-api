const loopMovies = require("../utils/loopMovies");

module.exports = async function getTvShow() {
  const endPoint = "/tv";
  try {
    const tvTop = await loopMovies(endPoint);

    res.json(tvTop);
  } catch (error) {
    console.log(error);
  }
};
