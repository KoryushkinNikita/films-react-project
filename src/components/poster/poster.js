import React from 'react';
import './poster.css'

const BACKGROUND_IMG = "https://image.tmdb.org/t/p/w1280";
/**
* Создание реакт элемента постера
*/
const Poster = ({movie}) => {
      return (
        <>
        {movie.backdrop_path ?
        <div className="poster"
           style={{backgroundImage: `url(${BACKGROUND_IMG}${movie.backdrop_path})`}}>
                  <div className="posterContent">
                      {movie.title ? <h1 className="movieTitleName">{movie.title}</h1> : null}
                      {movie.budget ? <p className="movieBudget"><b>Budget:</b><br/>{movie.budget}$</p> :null}
                      {movie.overview ? <p className="movieReview"><b>Overview:</b><br/>{movie.overview}</p> : null}
                  </div>
        </div>
                  : null}
        </>
        )

};


export default Poster;
