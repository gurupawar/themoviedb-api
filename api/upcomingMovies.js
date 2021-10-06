const loopMovies = require("../utils/loopMovies");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

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
