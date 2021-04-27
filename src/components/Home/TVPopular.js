import React,{useReducer,useEffect} from 'react'
import {popularReducer,initialState} from '../../reducer/television/popularReducer'

import {api_key} from  '../../Keys'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const TVPopular = () => {
    const [{PopularSeries}, dispatch] = useReducer(popularReducer, initialState)
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_POPULAR_TELEVISION',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_POPULAR_TELEVISION',payload:[]}))
     
     
    }, [])

    const populartv =  PopularSeries.length !== 0 ? (
        <Fragment>
       
            <ul className="home-popular grid">
                {PopularSeries.slice(0,10).map((popular) => { return( 
                <li className="" key={popular.id}>  
                    <div>
                    <Link to={`/tv/${popular.id}`} > 
                        <img src={'https://image.tmdb.org/t/p/w220_and_h330_face'+popular.poster_path} className="img-responsive" alt={popular.original_name} />
                    </Link>
                        <div>
                            <p>
                            <Link to={`/tv/${popular.id}`} className="link" >
                            {popular.original_name}
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
              populartv
          }
      </Fragment>
    );
}
 
export default TVPopular;