import React, { Fragment,useEffect,useReducer } from 'react'
import { Link, useParams } from 'react-router-dom'
import {recommendationReducer,initialState} from '../../reducer/movie/recommendationReducer'

import {api_key} from  '../../Keys'

const MovieRecommendation = () => {
    const {id} = useParams();
    const [{Recommendation},dispatch] = useReducer(recommendationReducer,initialState)

    useEffect(() => {
        dispatch({type:'CLEAR_RECOMMENDATION_MOVIE',payload:[]})
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}`)
        .then(res => res.json())
        .then(data =>  dispatch({type:'FETCH_RECOMMENDATION_MOVIE',payload:data.results}))
        .catch(err => console.log(err))

       
 
    }, [id])
    let movieRecommendation =  Recommendation.length != 0 ? (
        <Fragment>    
        <h2>Recommendations</h2>
        <ul className="recommendation grid">
        {Recommendation.slice(0,10).map((rec,index) => { return( 
         <li className="" key={index}>  
             <div>
                <Link to={`/movie/${rec.id}`} >                 
                    <img src={'https://image.tmdb.org/t/p/w250_and_h141_face'+rec.poster_path}/>
                </Link>

                 <div>
                     <p>  <Link to={`/movie/${rec.id}`} className="link"> {rec.original_title}</Link></p>
                     <span>{rec.character}</span>
                 </div>
             </div>
         </li>           
     )
   })}
 </ul>
 </Fragment>

    ) : (<p>We don't have any recommendation for this movie.</p>)
    return(
      <Fragment>
         {movieRecommendation}
      </Fragment>
    )
}
export default MovieRecommendation
    