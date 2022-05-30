import {useEffect, useState} from "react"
import './mainPage.css'
import MovieCard from "../movie/movieCard"
import Poster from '../poster/poster'
import ApiCalls from '../../ApiCalls'

const MainPage = (props) => {

    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({title: "Loading Movies"})

    useEffect(() => {
        fetchMovies()

    },[props.value])

    const fetchMovies = async (event) => {
        if (event) {
            event.preventDefault()
        }
        const data = await ApiCalls.getMovies(props.value);

        if (data.results[0]){
          setMovies(data.results);
        }
        if (data.results.length) fetchMovie(data.results[0].id);
    }

    const fetchMovie = async (id) => {
        const movieData = await ApiCalls.getMovie(id);
        if (movieData)
          setMovie(movieData)
    }

    const fetchGenre = async (type) => {
        const genreData = await ApiCalls.getGenres(type);
        if (genreData){
          setMovies(genreData.results)
          setMovie(genreData.results[0])}
        if (genreData.length)
          await fetchMovie(genreData.results[0].id)

    }



    const selectedMovie = (movie) => {
      if (movie.title && movie.overview && movie.backdrop_path) {
        fetchMovie(movie.id)
        setMovie(movie)
        window.scrollTo(0,0)
      }
      else alert("Incomplete information about this film");

    }

    return (
        <div className="MainPage">
                <main>
                        <Poster movie={movie}/>
                        <div className="moviesContainer">
                        <div className="buttonGenre mainPagebutton" onClick={() => fetchGenre('main')}>Main Page</div>
                        <div className="buttonGenre trending" onClick={() => fetchGenre('tranding')}>Trending</div>
                        <div className="buttonGenre series" onClick={() => fetchGenre('series')}>Series</div>
                        <div className="buttonGenre topRated" onClick={() => fetchGenre('topRated')}>Top rated</div>
                        {movies.map(movie => (
                            <MovieCard
                                selectMovie={selectedMovie}
                                key={movie.id}
                                movie={movie}
                            />
                        ))}
                        </div>
                </main>
        </div>
    );
}

export default MainPage;
