import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
const MovieCredit = ({filterMovie,id}) => {
    let filteredMovie = filterMovie === null ?(null) :(filterMovie.slice(0,9).map((movie) => { 
        return(<li key={movie.id}><Link to={`/movie/${movie.id}`}>{movie.original_title}</Link> as <span>{movie.character}</span></li>)
    }))
    console.log(id)
    return(
       
        <Fragment>
        <ul className="pcredit"> 
            {filteredMovie}
          
        </ul>

             {
                filterMovie === null ? (null) : (
                    filterMovie.length < 10 ? null :       
                     <a href={`https://www.themoviedb.org/person/${id}`}> View All Cast </a>
             
                    )
            }
       
    </Fragment>
    )
   
}
export default MovieCredit