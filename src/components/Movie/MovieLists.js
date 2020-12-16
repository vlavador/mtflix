import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
const MovieLists = ({movieList,Created}) => {


    const MovieTrend = movieList === undefined ? (null) :(
        movieList.map(movie => {
            return( 
                <li key={movie.id}>
                    <div className="movie-img">
                    <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + movie.poster_path}  alt="Lights"></img>
                    </div>
                    <div className="movie-content">
                        <Link to={'/movie/' +movie.id}>{movie.title}</Link>
                        <p>{Created(movie.release_date)}</p>
                    </div>
                  
                </li>
            )
            })
    ) 

        
    return (
        <Fragment>
            {MovieTrend}
        </Fragment>
    )
}

export default MovieLists