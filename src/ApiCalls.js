import Info from "./constInfo"
import axios from "axios"
let info = Info()
export default class ApiCalls {

    static getMovies = async (value) => {
        const {data} = await axios.get(`${value ? info.search : info.discover}`, {
            params: {
                api_key: info.key,
                query: value
            }
        })

        return data;
    }

    static getMovie = async (id) => {
        const {data} = await axios.get(`${info.movie}movie/${id}`, {
            params: {
                api_key: info.key,
            }
        })

        return data
    }

    static getGenres = async (type) => {
      let link = "";
      switch (type)
      {
        case "main":link = info.discover;break;
        case "tranding":link = info.tranding;break;
        case "series":link = info.series;break;
        case "topRated":link = info.topRated;break;
      }
      const {data} = await axios.get(`${link}`, {
          params: {
              api_key: info.key
          }
      })
      return data;
    }
}
