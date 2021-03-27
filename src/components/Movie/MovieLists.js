import React,{Fragment} from 'react'
import {Link,useParams} from 'react-router-dom'
import nomoviebg from '../../assets/nomoviebg.svg'
import test from '../../assets/TEST.png'

const MovieLists = ({movieList,Created}) => {
    console.log('movie list working')
    const MovieTrend = movieList === undefined ? (null) :(
        movieList.map(movie => {
            return( 
                <li key={movie.id}>
                    <div className="movie-tv-img bg-color">
                        {
                            movie.poster_path === null ?
                            (<img src={test}/>) :
                            (<img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + movie.poster_path}  alt="Lights" />)
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