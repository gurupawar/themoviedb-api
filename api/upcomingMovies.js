const loopMovies = require("../utils/loopMovies");

module.exports = async (req, res) => {
  const endPoint = "/movie/upcoming";
  try {
    const ucomingMv = await loopMovies(endPoint);
    res.json({
      data: ucomingMv,
    });
  } catch (error) {
    console.log(error);
  }
};
