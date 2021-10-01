const cheerio = require("cheerio");
const fetchUrl = require("../utils/fetch");
const { addHeaders } = require("../utils/headers");

// search movie/shows
// http://localhost:3000/search?title=movieName
module.exports = async (req, res) => {
  addHeaders(res);

  let keyword = req.query.title;
  const endPoint = "search?query=";
  try {
    const data = await fetchUrl(endPoint, keyword);

    const $ = cheerio.load(data);
    const mainEle = $(".search_results.movie > .results.flex > .card");

    const searchResult = [];

    mainEle.each((i, ele) => {
      const movieList = {
        id: "",
        title: "",
        image: "",
        release_date: "",
        overview: "",
      };
      ``;

      const ttl = $(ele).find("h2");

      ttl.each((i, e) => {
        const title = $(e).text();
        movieList.title = title;
      });

      const Bannerimage = $(ele).find(".image > .poster > a > img").attr("src");

      movieList.image = Bannerimage
        ? "https://www.themoviedb.org" + Bannerimage
        : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";
      movieList.id = $(ele).find(".title .result").attr("href").split("/")[2];
      movieList.release_date = $(ele).find(".release_date").text();
      movieList.overview =
        $(ele).find(".overview > p").text().substring(0, 150) + "...";
      searchResult.push(movieList);
    });

    res.json(searchResult);
  } catch (err) {
    console.error(err);
  }
};
