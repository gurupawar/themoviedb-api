const axios = require("axios");
const cheerio = require("cheerio");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  try {
    var movieList = [];
    let movie = [];

    for (let i = 1; i <= 5; i++) {
      const { data } = await axios.get(
        `https://www.themoviedb.org/movie?page=${i}`
      );
      const $ = await cheerio.load(data);
      const mainEle = $(".page_wrapper > .card.style_1").slice(0, -3);

      mainEle.each((i, ele) => {
        const h2title = $(ele).find("a.image").attr("title");
        const id = $(ele).find("a.image").attr("href").split("/")[2];
        const image = $(ele).find("a > img").attr("src");

        const mImg = image
          ? "https://www.themoviedb.org" + image
          : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
        const date = $(ele).find(".content > p").text().trim();
        const rating =
          $(ele).find(".user_score_chart").attr("data-percent") + "%";

        movie.push({
          id: id,
          title: h2title,
          release_date: date,
          user_score: rating,
          banner: mImg,
        });
      });
    }

    movieList.push(movie);
    res.json({
      data: movieList,
    });
  } catch (error) {
    console.log(error);
  }
};
