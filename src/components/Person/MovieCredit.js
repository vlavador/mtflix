import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
const MovieCredit = ({filterMovie}) => {
    let filteredMovie = filterMovie === null ?(null) :(filterMovie.map((movie) => { 
        return(<li key={movie.id}><Link to={`/movie/${movie.id}`}>{movie.original_title}</Link> as <span>{movie.character}</span></li>)
    }))
    return(
        <Fragment>
        {
            filteredMovie
        }
    </Fragment>
    )
   
}
export default MovieCredit