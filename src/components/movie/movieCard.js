import React from 'react';
import './movie.css'
import Info from '../../constInfo'

const MovieCard = ({movie, selectMovie}) => {
    const info = Info();
    return (
        <div onClick={() => selectMovie(movie)} className="movie">
                {movie.poster_path ? <img className="movieIMG" src={info.image + movie.poster_path} alt={movie.title}/> : null}
                <br/>
                {movie.title ? <span className="movieTitle">{movie.title}</span> : null}
                <br/>
                {movie.popularity ? <span className="moviePopularity">Popularity:{movie.popularity}</span> : null}
                <br/>
                {movie.vote_average ? <span className={"movieVoting"}>Rating:{movie.vote_average}</span> : null}
        </div>
    );
};


export default MovieCard;
