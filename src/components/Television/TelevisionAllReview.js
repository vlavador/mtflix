import React, { Component, Fragment,useEffect,useReducer } from 'react'

import {Link,useParams} from 'react-router-dom'

import nullCast from  '../../assets/null-cast.svg'
import OtherDetails from './OtherDetails'

import { televisionReviewReducer,reviewState } from '../../reducer/television/televisionReviewReducer'
import { televisionDetailsReducer,initialState } from '../../reducer/television/televisionDetailsReducer'

import {api_key} from  '../../Keys'

export default function TelevisionAllReview(){

    const {id} = useParams()
    const [{Review}, creditDispatch] = useReducer(televisionReviewReducer,reviewState)
  
    const [{TelevisionDetails}, dispatch] = useReducer(televisionDetailsReducer,initialState)

    const addSpace = (data) =>{
        let newcode = data.split('\n\r\n').map((code) => <p>{code}</p>);
  
        return [newcode[0]]
    }
    const getCreated = (date) => {
        let dates = new Date(date)
        const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        return `${mlist[dates.getMonth()]} ${dates.getUTCDate()}, ${dates.getUTCFullYear()}`
    }

    useEffect(() => {
        creditDispatch({type:'CLEAR_TELEVISION_REVIEW',payload:[]})
        fetch(`https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => creditDispatch({type:'FETCH_TELEVISION_REVIEW',payload:data}))
        .catch(err => console.log(err))
     
        window.scrollTo(0, 0)
    }, [id])

    useEffect(() => {
        dispatch({type:'CLEAR_TELEVISION_DETAILS',payload:[]})
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_TELEVISION_DETAILS',payload:data}))
        .catch(err => dispatch({type:'FETCH_NULL_TELEVISION_DETAIL',payload:null}))
    }, [id])

    let allReview = Review.length === 0 ? 
    (null) : 
    
    (Review.slice(0,9).map((review) =>
        {return(
        <li className="card">
            <div>
            <div className="review-info">
            <h2>Review by {review.author} <span>{review.author_details.rating}</span></h2>
            <p>Written by {review.author_details.name} on {getCreated(review.created_at)}</p>
            </div>
                <div className="card-body">{addSpace(review.content)}</div>
            </div>
            <div className="text-center">
                <a href={`https://www.themoviedb.org/review/${review.id}`} className="link">View Review</a>
            </div>
        </li>
        )})) 
    return(
        <Fragment>
                <section className="background">
                    <div className="container">
                        <div className="flex align-center">
                        {
                           TelevisionDetails.length === 0 ? 
                            (
                                   null
                                    
                            ) : (
                                <Fragment>
                                    <div>
                                        {TelevisionDetails.poster_path === null ? 
                                        (
                                            <img src={nullCast} className="noImage"/> 
                                        ) : (
                                            <img src={'https://image.tmdb.org/t/p/w116_and_h174_face'+TelevisionDetails.poster_path}/>
                                        )
                                        }
                                    </div>
                                        <div className="allcast-content">
                                            <h2>{TelevisionDetails.original_name}</h2>
                                            <Link to={`/movie/${id}`}>← Back to main</Link>
                                        </div>
                                    </Fragment>
                            )
                        }
                           
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                    <div className="grid review-grid">
                        <div >
                        <div>
                        <span className="view-all-left">Reviews:</span>
                          <span className="view-all-right"><a href={`https://www.themoviedb.org/movie/${TelevisionDetails.id}/reviews`} className="link"> View All Review</a></span>

                        </div>
                       
                            <div><ul>
                                {allReview}
                            </ul></div>
                            
                        </div>
                        <div>
                            <OtherDetails OtherDetails = {TelevisionDetails} />
                        </div>
                    </div>
                    
                    </div>
                  
                </section>
            </Fragment>
        
    )
}