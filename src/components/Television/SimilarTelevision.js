import React,{Fragment,useEffect,useReducer } from 'react'
import { Link,useParams } from 'react-router-dom'
import {api_key} from  '../../Keys'

import {similarReducer,initialState} from '../../reducer/television/similarReducer'

const SimilarTelevision = () => {
    const {id} = useParams();
    const [{Similar},dispatch] = useReducer(similarReducer,initialState)

    useEffect(() => {
        dispatch({type:'CLEAR_SIMILAR_TELEVISION',payload:[]})
        fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_SIMILAR_TELEVISION',payload:data.results}))
        .catch(err => console.log(err))
 
    }, [id])

    let similarmovie =  Similar.length > 1 ? (
        <Fragment>
            <h2>Similar Movie</h2>
            <ul className="similar grid">
                {Similar.slice(0,10).map((similarmovie,index) => { return( 
                <li className="" key={index}>  
                    <div>
                    <Link to={`/tv/${similarmovie.id}`} > 
                        <img src={'https://image.tmdb.org/t/p/w250_and_h141_face'+similarmovie.poster_path}/>
                    </Link>
                        <div>
                            <p>
                            <Link to={`/tv/${similarmovie.id}`} className="link" >
                            {similarmovie.original_name}
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
export default SimilarTelevision