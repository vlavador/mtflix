import React,{Fragment,useEffect,useReducer} from 'react'
import { Link, useParams } from 'react-router-dom'
import {api_key} from  '../../Keys'
import {televisionReviewReducer,reviewState } from '../../reducer/television/televisionReviewReducer';
const TelevisionReview = ({title}) => { 
    const {id} = useParams()
    const [{Review},dispatch] = useReducer(televisionReviewReducer,reviewState)

    useEffect(() => {
        dispatch({type:'CLEAR_TELEVISION_REVIEW',payload:[]})
        
        fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_TELEVISION_REVIEW',payload:data}))
        .catch(err => console.log(err))
     
        window.scrollTo(0, 0)
    }, [id])


 
    let review =  Review.length >= 1 ? ( 
    <Fragment>
          <ul className="review-design grid">
           {Review.slice(0,2).map((review,index) => { return( 
          

            <li className="card review-content" key={index}>
                <div>
                <div className="review-info reviewauthor">
                <h2>Review by {review.author} <span>{review.author_details.rating}</span></h2>
              
                </div>
                    <div className="card-body reviewcontent"><span>{review.content}</span></div>
                </div>
               
            </li>    
        )
      })}
    </ul>
    <Link to={`/tv/${id}/review`}>View All Review</Link>
      
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
export default TelevisionReview