const cheerio = require("cheerio");
const fetchUrl = require("../utils/fetch");

// get movie details by id
// http://localhost:3000/movie?id=280690
module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  const id = req.query.id;
  const endPoint = "/movie";
  try {
    const data = await fetchUrl(endPoint, id);
    const $ = cheerio.load(data);
    const movieDetails = [];

    const details = {
      title: "",
      release: "",
      runtime: "",
      genre: "",
      user_score: "",
      movie_info: [],
      cast: [],
      writer_director: [],
      poster: "",
      overview: "",
    };

    const mainEle = $(".single_column > #original_header");

    details.poster =
      "https://www.themoviedb.org" +
      mainEle.find(".image_content.backdrop > img").attr("data-src");

    const _title = mainEle.find(".header_poster_wrapper").find("h2");
    const release_year = $(_title).children("span").text();

    details.title = $(_title).children("a").text().trim() + " " + release_year;

    details.release = $(mainEle).find(".facts > .release").text().trim();
    details.runtime = $(mainEle).find(".facts > .runtime").text().trim();
    let genre = [];

    $(mainEle)
      .find(".facts > .genres > a")
      .each((i, e) => {
        genreList = $(e).text().trim();
        genre.push(genreList);
      });
    details.genre = genre;

    details.user_score =
      $(mainEle).find(".user_score_chart").attr("data-percent") + "%";

    details.overview = $(mainEle)
      .find(".header_info > .overview > p")
      .text()
      .trim();

    const castEle = $(".white_column").find(".people.scroller > li.card");

    castEle.each((i, ele) => {
      const character = $(ele).find("p > a").text();
      const asA = $(ele).find(".character").text();
      const castList = character + " - " + asA;
      details.cast.push(castList);
    });

    const info = $(".people.no_image > li").each((e, ele) => {
      const name = $(ele).find("p > a").text().trim();
      const character = $(ele).find(".character").text().trim();

      const grp = character + " - " + name;

      details.writer_director.push(grp);
    });

    $(".column.no_bottom_pad .facts.left_column > p").each((i, e) => {
      const tagName = $(e).find("strong").text().trim();
      const getInfo = $(e)
        .contents()
        .filter(function () {
          return this.nodeType === 3 && /\S/.test(this.nodeValue);
        });
      const modifiedGetInfo = $(getInfo).text().trim();
      const infoo = tagName + " - " + modifiedGetInfo;
      details.movie_info.push(infoo);
    });

    movieDetails.push(details);
    res.json(movieDetails);
  } catch (err) {
    console.error(err);
  }
};
