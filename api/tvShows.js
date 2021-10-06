const loopMovies = require("../utils/loopMovies");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  const endPoint = "/tv";
  try {
    const tvshows = await loopMovies(endPoint);

    res.json({
      data: tvshows,
    });
  } catch (error) {
    console.log(error);
  }
};
