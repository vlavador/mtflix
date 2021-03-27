import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
const MovieCredit = ({filterMovie,id}) => {

    let filteredMovie = filterMovie === null ?(null) :(
        filterMovie.length === 0 ?
        (<p>We don't find any movie credits in the database</p>)
        :
        (
        <ul className="pcredit">
           {  filterMovie.slice(0,9).map((movie) => { 
        return(<li key={movie.id}><Link to={`/movie/${movie.id}`}>{movie.original_title}</Link> as <span>{movie.character}</span></li>)}) }
        </ul>
           
        )
        )
    return(
       
        <Fragment>
       
            {filteredMovie}
          
      

             {
                filterMovie === null ? (null) : (
                    filterMovie.length < 10 ? null :       
                     <a className="view-credit" href={`https://www.themoviedb.org/person/${id}`}> View All Movie Cast </a>
             
                    )
            }
       
    </Fragment>
    )
   
}
export default MovieCredit