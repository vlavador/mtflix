import React, { Fragment,useEffect,useReducer } from 'react'
import { Link, useParams } from 'react-router-dom'
import {similarMovieReducer,initialState} from '../../reducer/movie/similarMovieReducer'

import {api_key} from  '../../Keys'

const SimilarMovies = () => {
    const {id} = useParams();
    const [{Similar},dispatch] = useReducer(similarMovieReducer,initialState)

    useEffect(() => {
        dispatch({type:'CLEAR_SIMILAR_MOVIE',payload:[]})
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_SIMILAR_MOVIE',payload:data.results}))
        .catch(err => console.log(err))

  
 
    }, [id])
    let similarmovie =  Similar.length != 0 ? (
        <Fragment>
            <h2>Similar Movie</h2>
            <ul className="similar grid">
                {Similar.slice(0,10).map((similarmovie,index) => { return( 
                <li className="" key={index}>  
                    <div>
                    <Link to={`/movie/${similarmovie.id}`} > 
                        <img src={'https://image.tmdb.org/t/p/w250_and_h141_face'+similarmovie.poster_path}/>
                    </Link>
                        <div>
                            <p>
                            <Link to={`/movie/${similarmovie.id}`} className="link" >
                            {similarmovie.original_title}
                            </Link>
                            </p>
                            <span>{similarmovie.character}</span>
                        </div>
                    </div>
                </li>           
            )
        })}
 </ul>
        </Fragment>
 
    
    ) : (<p>We don't find any similar movie.</p>)
    return(
      <Fragment>
          {similarmovie}
      </Fragment>
    )
}
export default SimilarMovies