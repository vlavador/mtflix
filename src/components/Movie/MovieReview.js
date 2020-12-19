import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

const MovieReview = ({Review,id}) => { 
    
    let review =  Review.length >= 1 ? ( 
    <Fragment>
    <div>
    <h2 className="header-title">Review</h2>
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
   
    </div>
    <Link to={`/movie/${id}/review`}>View All Review</Link>

    </Fragment>
    ):(<div>not working</div>)
   
    return(
        <Fragment>
            {review}
        </Fragment>
    )
}
export default MovieReview