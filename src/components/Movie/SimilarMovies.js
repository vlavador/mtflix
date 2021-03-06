import React, { Fragment,useEffect,useReducer } from 'react'
import { Link, useParams } from 'react-router-dom'
import {similarMovieReducer,initialState} from '../../reducer/movie/similarMovieReducer'

import {api_key} from  '../../Keys'

const SimilarMovies = () => {
    const {id} = useParams();
    const [{Similar},dispatch] = useReducer(similarMovieReducer,initialState)

    useEffect(() => {
        const abortCont = new AbortController();
        dispatch({type:'CLEAR_SIMILAR_MOVIE',payload:[]})
        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api_key}`,{signal:abortCont.signal})
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_SIMILAR_MOVIE',payload:data.results}))
        .catch(err => console.log(err))
        return () => abortCont.abort();
  
 
    }, [id])
    let similarmovie =  Similar.length !== 0 ? (
        <Fragment>
       
            <ul className="similar grid">
                {Similar.slice(0,10).map((similarmovie,index) => { return( 
                <li className="" key={index}>  
                    <div>
                    <Link to={`/movie/${similarmovie.id}`} > 
                        <img src={'https://image.tmdb.org/t/p/w250_and_h141_face'+similarmovie.poster_path} alt={similarmovie.original_title}/>
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
      <div className="container custom-padding">
           <h2>Similar Movie</h2>
          {similarmovie}
      </div>
    )
}
export default SimilarMovies