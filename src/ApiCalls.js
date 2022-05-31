import axios from "axios"

const movie = "https://api.themoviedb.org/3/";
const search = "https://api.themoviedb.org/3/search/movie";
const discover = "https://api.themoviedb.org/3/discover/movie";
const key = "cd328ae470bf78b61eb7d71787b09e99";
const series = `https://api.themoviedb.org/3/tv/popular`;
const tranding = `https://api.themoviedb.org/3/trending/all/day`;
const topRated = `https://api.themoviedb.org/3/tv/top_rated`;

export default class ApiCalls {

    static getMovies = async (value) => {
        const {data} = await axios.get(`${value ? search : discover}`, {
            params: {
                api_key: key,
                query: value
            }
        })

        return data;
    }

    static getMovie = async (id) => {
        const {data} = await axios.get(`${movie}movie/${id}`, {
            params: {
                api_key: key,
            }
        })

        return data
    }

    static getGenres = async (type) => {
      let link = "";
      switch (type)
      {
        case "main":link = discover;break;
        case "tranding":link = tranding;break;
        case "series":link = series;break;
        case "topRated":link = topRated;break;
      }
      const {data} = await axios.get(`${link}`, {
          params: {
              api_key: key
          }
      })
      return data;
    }
}
