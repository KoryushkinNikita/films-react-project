import React from 'react';
import Info from '../../constInfo'
import './poster.css'

const Poster = ({movie}) => {
    const info = Info();
      return (
        <>
        {movie.backdrop_path ?
        <div className="poster"
           style={{backgroundImage: `url(${info.backgroundIMG}${movie.backdrop_path})`}}>
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
