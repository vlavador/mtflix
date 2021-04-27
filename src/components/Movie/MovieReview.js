import React,{Fragment,useEffect,useReducer} from 'react'
import { Link, useParams } from 'react-router-dom'
import { movieReviewReducer,reviewState } from '../../reducer/movie/movieReviewReducer';

import {api_key} from  '../../Keys'

const MovieReview = ({title}) => { 
    const {id} = useParams()
    const [state,dispatch] = useReducer(movieReviewReducer,reviewState)
    const {Review} = state
    useEffect(() => {
        const abortCont = new AbortController();
        dispatch({type:'CLEAR_MOVIE_REVIEW',payload:[]})
        fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${api_key}`,{signal:abortCont.signal})
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_MOVIE_REVIEW',payload:data.results}))
        .catch(err => console.log(err))
        return () => abortCont.abort();
    
    }, [id])

    let review =  Review.length >= 1 ? ( 
    <Fragment>
          <ul className="review-design grid">
           {Review.slice(0,2).map((review,index) => { return( 
          

            <li className="cards review-content" key={index}>
                <div>
                <div className="review-info reviewauthor">
                <h2>Review by {review.author} <span>{review.author_details.rating}</span></h2>
              
                </div>
                    <div className="card-bodys reviewcontent"><span>{review.content}</span></div>
                </div>
               
            </li>    
        )
      })}
    </ul>
    <Link to={`/movie/${id}/review`}>View All Review</Link>
      
    </Fragment>
    ):(<p>We don't have any reviews for {title}</p>)
   
    return(
        <Fragment> <div>
        <h2 className="header-title">Review</h2>
      
            {review}
        
   
   </div>
        </Fragment>
    )
}
export default MovieReview