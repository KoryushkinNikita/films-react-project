import {useEffect, useState} from "react"
import './mainPage.css'
import MovieCard from "../movie/movieCard"
import Poster from '../poster/poster'
import ApiCalls from '../../ApiCalls'
/**
* Создание реакт элемента основной части
*/
const MainPage = (props) => {

    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({title: "Loading Movies"})
    useEffect(() => {
        initMovies()

    },[props.value])
    /**
    * Инициализация фильмов или поиск по заданному значению
    * @param {string} props.value - значение поискового запроса
    */
    const initMovies = async () => {
        const data = await ApiCalls.getMovies(props.value);

        if (data.results[0]){
          setMovies(data.results);
        }
        if (data.results.length) setPosterData(data.results[0].id);
    }
    /**
    * задание постера фильма
    */
    const setPosterData = async (id) => {
        const movieData = await ApiCalls.getMovie(id);
        if (movieData)
          setMovie(movieData)
    }
    /**
    * Поиск и вывод фильмов по заданному жанру
    * @param {string} type - тип жанра
    */
    const setGenre = async (type) => {
        const genreData = await ApiCalls.getGenres(type);
        if (genreData){
          setMovies(genreData.results)
          setPosterData(genreData.results[0].id)}

    }


    /**
    * СОздание постера фильма при нажатии на него
    * @param {object} movie - выбранный фильм
    */
    const selectedMovie = (movie) => {
      {/*
        api возвращает данные не корректно,
        и для того чтобы понять что фильма нет, проверяем обязательные поля*/}
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
