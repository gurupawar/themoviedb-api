const loopMovies = require("../utils/loopMovies");

module.exports = async (req, res) => {
  const endPoint = "/movie/upcoming";
  try {
    const ucomingMv = await loopMovies(endPoint);
    res.json(ucomingMv);
  } catch (error) {
    console.log(error);
  }
};
