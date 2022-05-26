import {useEffect, useState} from "react"
import './mainPage.css'
import Info from '../../constInfo'
import axios from 'axios'
import MovieCard from "../movie/movieCard"
import Poster from '../poster/poster'
import Header from '../header/header'

const MainPage = () => {
    const info = Info()

    const [movies, setMovies] = useState([])
    const [searchKey, setSearchKey] = useState()
    const [movie, setMovie] = useState({title: "Loading Movies"})

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async (event) => {
        if (event) {
            event.preventDefault()
        }

        const {data} = await axios.get(`${searchKey ? info.search : info.discover}`, {
            params: {
                api_key: info.key,
                query: searchKey
            }
        })
        if (data){
          setMovies(data.results)
          setMovie(data.results[0])}
        if (data.results.length)
        {
          await fetchMovie(data.results[0].id)
        }
    }

    const fetchMovie = async (id) => {
        const {data} = await axios.get(`${info.movie}movie/${id}`, {
            params: {
                api_key: info.key,
            }
        })
        if (data)
          setMovie(data)
    }

    const fetchGenre = async (type) => {
        let link = ""
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
        if (data){
          setMovies(data.results)
          setMovie(data.results[0])}
        if (data.length)
          await fetchMovie(data.results[0].id)

    }



    const selectedMovie = (movie) => {
      if (movie.title && movie.overview) {
        fetchMovie(movie.id)
        setMovie(movie)
        window.scrollTo(0,0)
      }
      else alert("Not all about this film");

    }

    const moviesShown = () => (
        movies.map(movie => (
            <MovieCard
                selectMovie={selectedMovie}
                key={movie.id}
                movie={movie}
            />
        ))
    )

    return (
        <div className="MainPage">
        <Header onSubmit={fetchMovies} onInput={(event) => setSearchKey(event.target.value)}/>
                <main>
                        <Poster movie={movie}/>
                        <div className="buttons">
                          <div className="buttonGenre mainPagebutton" onClick={() => fetchGenre('main')}>Main Page</div>
                          <div className="buttonGenre trending" onClick={() => fetchGenre('tranding')}>Trending</div>
                          <div className="buttonGenre series" onClick={() => fetchGenre('series')}>Series</div>
                          <div className="buttonGenre topRated" onClick={() => fetchGenre('topRated')}>Top rated</div>
                        </div>
                        <div className="moviesContainer">
                          {moviesShown()}
                        </div>
                </main>
        </div>
    );
}

export default MainPage;