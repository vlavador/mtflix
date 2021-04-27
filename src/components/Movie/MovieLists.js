import React,{Fragment} from 'react'
import {Link,useParams} from 'react-router-dom'

import test from '../../assets/TEST.png'

const MovieLists = ({movieList,Created}) => {
    
    const MovieTrend = movieList === undefined ? (null) :(
        movieList.map(movie => {
            return( 
                <li key={movie.id}>
                    <div className="movie-tv-img bg-color">
                        {
                            movie.poster_path === null ?
                            (<Link to={'/movie/' +movie.id}><img src={test} alt={movie.title} /></Link>) :
                            (<Link to={'/movie/' +movie.id}><img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + movie.poster_path}  alt={movie.title}
                             /></Link>)
                        }
                    </div>
                    <div className="movie-tv-content">
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