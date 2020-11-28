import React,{Fragment} from 'react'

const MovieReview = ({Review}) => { 
    let review =  Review.length >= 1 ? ( 
    <Fragment>
    <div>
    <ul className="review-design grid">
           {Review.slice(0,2).map((review,index) => { return( 
            <li className="review-content" key={index}>  
            <div>
            <p className="reviewauthor">A Review by {review.author}</p>
                <p className="reviewcontent">{review.content}</p>     
            </div>
          
            </li>           
        )
      })}
    </ul>
    </div>

    </Fragment>
    ):(<div>not working</div>)
    return(
        <Fragment>
            {review}
        </Fragment>
    )
}
export default MovieReview