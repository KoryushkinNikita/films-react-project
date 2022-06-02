import axios from "axios"

const MOVIE = "https://api.themoviedb.org/3/";
const SEARCH = "https://api.themoviedb.org/3/search/movie";
const DISCOVER = "https://api.themoviedb.org/3/discover/movie";
const KEY = "cd328ae470bf78b61eb7d71787b09e99";
const SERIES = `https://api.themoviedb.org/3/tv/popular`;
const TRANDING = `https://api.themoviedb.org/3/trending/all/day`;
const TOP_RATED = `https://api.themoviedb.org/3/tv/top_rated`;

export default class ApiCalls {
    /**
    * Поиск фильмов по заданному поисковому слово или загрузка фильмов при начальной загрузке страницы
    * @param {value} - поисковое слово
    */
    static getMovies = async (value) => {
        const {data} = await axios.get(`${value ? SEARCH : DISCOVER}`, {
            params: {
                api_key: KEY,
                query: value
            }
        })

        return data;
    }
    /**
    * Поиск фильмоа по заданному id
    * @param {id} - id фильма
    */
    static getMovie = async (id) => {
        const {data} = await axios.get(`${MOVIE}movie/${id}`, {
            params: {
                api_key: KEY,
            }
        })

        return data
    }

    /**
    * Поиск фильмов по заданному жанру
    * @param {type} - тип жанра
    */
    static getGenres = async (type) => {
      let link = "";
      switch (type)
      {
        case "main":link = DISCOVER;break;
        case "tranding":link = TRANDING;break;
        case "series":link = SERIES;break;
        case "topRated":link = TOP_RATED;break;
      }
      const {data} = await axios.get(`${link}`, {
          params: {
              api_key: KEY
          }
      })
      return data;
    }
}
