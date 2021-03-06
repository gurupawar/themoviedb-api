# 💼 Themoviedb api

An Unofficial API for themoviedb to fetch all movies & tv shows from Themoviedb.org

# 🏷️ Description

This API currently supports 7 routes.

1. **/search** - get list of movies/shows based on user input.

2. **/movie** - get all information of seleted movie/show.

3. **/movies/popular** - get popular movies.

4. **/movies/top-rated** - get top-rated movies.

5. **/movies/upcoming** - get upcoming movies.

6. **/tv** - get tv shows.

7. **/tv/top-rated** - get top-rated tv shows.

# 📃 Usage

# /search 

Make a `GET` request to `https://themoviedb-api.vercel.app/search?title={movie name}`

**Example** - https://themoviedb-api.vercel.app/search?title=joker

#### Response Format

The response JSON Object looks something like this -

```JSON
{
  "data": [
    {
      "id": "475557",
      "title": "Joker",
      "image": "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      "release_date": "October  2, 2019",
      "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychop..."
    },
  ]
}
```

# /movie

Make a `GET` request to `https://themoviedb-api.vercel.app/movie?id={movie id}`

**Example** - https://themoviedb-api.vercel.app/movie?id=297762

#### Response Format

The response JSON Object looks something like this -

```JSON
{
  "data": [
    {
      "title": "Wonder Woman (2017)",
      "release": "06/02/2017 (US)",
      "runtime": "2h 21m",
      "genre": [
        "Action",
        "Adventure",
        "Fantasy"
      ],
      "user_score": "73.0%",
      "movie_info": [
        "Status - Released",
        "Original Language - English",
        "Budget - $149,000,000.00",
        "Revenue - $821,847,012.00"
      ],
      "cast": [
        "Gal Gadot - Diana Prince / Wonder Woman",
        "Chris Pine - Steve Trevor",
        "Robin Wright - Antiope",
        "Connie Nielsen - Hippolyta",
        "David Thewlis - Sir Patrick / Ares",
        "Danny Huston - Ludendorff",
        "Elena Anaya - Dr. Maru",
        "Ewen Bremner - Charlie",
        "Lucy Davis - Etta"
      ],
      "writer_director": [
        "Screenplay, Story - Allan Heinberg",
        "Director - Patty Jenkins",
        "Story - Jason Fuchs",
        "Story - Zack Snyder"
      ],
      "poster": "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
      "overview": "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict."
    }
  ]
}

```

## Development

### Run locally

- Clone the Repo

  ```
  git clone https://github.com/gurupawar/themoviedb-api

  cd themoviedb-api
  ```

- Install the dependencies

  ```
  npm install
  ```

- Start development server

  ```
  npm start
  ```

- Deploy to your vercel account

  ```
  npm run deploy
  ```
