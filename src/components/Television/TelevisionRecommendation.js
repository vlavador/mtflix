import React,{Fragment,useEffect,useReducer } from 'react'
import { Link,useParams } from 'react-router-dom'
import {api_key} from  '../../Keys'

import {recommendationReducer,initialState} from '../../reducer/television/recommendationReducer'

const TelevisionRecommendation = () => {

    const {id} = useParams();
    const [{Recommendation},dispatch] = useReducer(recommendationReducer,initialState)

    useEffect(() => {
        dispatch({type:'CLEAR_RECOMMENDATION_TELEVSION',payload:[]})
        fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_RECOMMENDATION_TELEVSION',payload:data.results}))
        .catch(err => console.log(err))
 
    }, [id])

    let TelevisionRecommendation =  Recommendation.length > 1 ? (
        <Fragment>    
        <h2>Recommendations</h2>
        <ul className="recommendation grid">
        {Recommendation.slice(0,10).map((rec,index) => { return( 
         <li className="" key={index}>  
             <div>
                <Link to={`/tv/${rec.id}`} >                 
                    <img src={'https://image.tmdb.org/t/p/w250_and_h141_face'+rec.poster_path}/>
                </Link>

                 <div>
                     <p>  <Link to={`/tv/${rec.id}`} className="link" > {rec.original_name}</Link></p>
                     <span>{rec.character}</span>
                 </div>
             </div>
         </li>           
     )
   })}
 </ul>
 </Fragment>

    ) : (<p>We don't have any recommendation for this Television Series.</p>)
    return(
      <Fragment>
         {TelevisionRecommendation}
      </Fragment>
    )
}
export default TelevisionRecommendation
    