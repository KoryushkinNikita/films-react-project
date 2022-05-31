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
        const data = await ApiCalls.getMovies(props.value);

        if (data.results[0]){
          setMovies(data.results);
        }
        if (data.results.length) setPosterData(data.results[0].id);
    }

    const setPosterData = async (id) => {
        const movieData = await ApiCalls.getMovie(id);
        if (movieData)
          setMovie(movieData)
    }

    const setGenre = async (type) => {
        const genreData = await ApiCalls.getGenres(type);
        if (genreData){
          setMovies(genreData.results)
          setPosterData(genreData.results[0].id)}
        if (genreData.length)
          await setPosterData(genreData.results[0].id)

    }



    const selectedMovie = (movie) => {
      if (movie.title && movie.overview && movie.backdrop_path) {
        setPosterData(movie.id)
        window.scrollTo(0,0)
      }
      else alert("Incomplete information about this film");

    }

    return (
        <div className="MainPage">
                <main>
                        <Poster movie={movie}/>
                        <div className="moviesContainer">
                        <div className="buttonGenre mainPagebutton" onClick={() => setGenre('main')}>Main Page</div>
                        <div className="buttonGenre trending" onClick={() => setGenre('tranding')}>Trending</div>
                        <div className="buttonGenre series" onClick={() => setGenre('series')}>Series</div>
                        <div className="buttonGenre topRated" onClick={() => setGenre('topRated')}>Top rated</div>
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
