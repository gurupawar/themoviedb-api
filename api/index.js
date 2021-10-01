module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  res.json({
    status: "online",
    Documentation: "https://github.com/gurupawar/",
    Author: "https://gurupawar.info",
  });
};
