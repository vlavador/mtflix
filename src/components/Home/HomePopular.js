import React,{useReducer,useEffect} from 'react'
import {popularReducer,initialState} from '../../reducer/movie/popularReducer'

import {api_key} from  '../../Keys'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const HomePopular = () => {
    const [{PopularMovies}, dispatch] = useReducer(popularReducer, initialState)
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
        .then(res => res.json())
        .then(data =>  dispatch({type:'FETCH_POPULAR_MOVIE',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_POPULAR_MOVIE',payload:[]}))
     
    }, [])

    const popularmovie =  PopularMovies.length !== 0 ? (
        <Fragment>
       
            <ul className="home-popular grid">
                {PopularMovies.slice(0,10).map((popular) => { return( 
                <li className="" key={popular.id}>  
                    <div>
                    <Link to={`/movie/${popular.id}`} > 
                        <img src={'https://image.tmdb.org/t/p/w220_and_h330_face'+popular.poster_path} className="img-responsive" alt= {popular.original_title}/>
                    </Link>
                        <div>
                            <p>
                            <Link to={`/movie/${popular.id}`} className="link" >
                            {popular.original_title}
                            </Link>
                            </p>
                          
                        </div>
                    </div>
                </li>           
            )
        })}
 </ul>
        </Fragment>
 
    
    ) : (null)

    return (
      <Fragment>
          {
              popularmovie
          }
      </Fragment>
    );
}
 
export default HomePopular;