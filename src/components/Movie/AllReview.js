import React, {Fragment,useEffect,useReducer } from 'react'

import {Link, useParams} from 'react-router-dom'

import nullCast from  '../../assets/null-cast.svg'
import OtherDetails from './OtherDetails'
import Loader from 'react-loader-spinner'

import { movieReviewReducer,reviewState } from '../../reducer/movie/movieReviewReducer';
import { movieDetailsReducer,initialState } from '../../reducer/movie/movieDetailsReducer';

import {api_key} from  '../../Keys'
import {getCreated} from '../functions'

import {addSpace} from '../functions'
export default function AllReview(){
        const {id} = useParams()
        const [{Review}, creditDispatch] = useReducer(movieReviewReducer,reviewState)
      
        const [{MovieDetails}, dispatch] = useReducer(movieDetailsReducer,initialState)
      

        useEffect(() => {
            const abortConts = new AbortController();
            creditDispatch({type:'CLEAR_MOVIE_REVIEW',payload:[]})
            fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${api_key}`,{signal:abortConts.signal})
            .then(res => res.json())
            .then(data => creditDispatch({type:'FETCH_MOVIE_REVIEW',payload:data.results}))
            .catch(err => console.log(err))
            return () => abortConts.abort();

        }, [id])

        useEffect(() => {
            const abortCont = new AbortController();
               dispatch({type:'CLEAR_MOVIEDETAILS',payload:[]})

               fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`,{signal:abortCont.signal})
        .then(res => res.json())
        .then(data =>  dispatch({type:'FETCH_MOVIEDETAILS',payload:data}))
        .catch(err => dispatch({type:'FETCH_NULLMOVIEDETAIL',payload:null}))
        return () => abortCont.abort();
        
          
        }, [id])


        let allReview = Review.length === 0 ? 
        (null) : 
        
        (Review.slice(0,9).map((review) =>
            { return(
            <li className="cards">
                <div>
                <div className="review-info">
                <h2>Review by {review.author} </h2>
                <p>Written by {review.author_details.username} on {getCreated(review.created_at)}</p>
                </div>
                    <div className="">{addSpace(review.content)}</div>
                </div>
                <div className="text-center">
                    <a href={`https://www.themoviedb.org/review/${review.id}`} className="link">View Review</a>
                </div>
            </li>
            )})) 

            return(
                <Fragment>
                  {
                MovieDetails.length === 0 ? (
                    <div className="spinner-design container">
                    <Loader type="Puff" color="#00BFFF" height={150} width={200} />
                    </div>
                ):
                (
                    <Fragment>
                <section className="background">
                    <div className="container">
                        <div className="flex align-center">
                        {
                            MovieDetails.length === 0 ? 
                            (
                                   null
                                    
                            ) : (
                                <Fragment>
                                    <div>
                                        {MovieDetails.poster_path === null ? 
                                        (
                                            <img src={nullCast} className="noImage" alt={MovieDetails.title}/> 
                                        ) : (
                                            <img src={'https://image.tmdb.org/t/p/w116_and_h174_face'+MovieDetails.poster_path} alt={MovieDetails.title}/>
                                        )
                                        }
                                    </div>
                                        <div className="allcast-content">
                                            <h2>{MovieDetails.title}</h2>
                                            <Link to={`/movie/${id}`}>← Back to movie</Link>
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
                          <span className="view-all-right"><a href={`https://www.themoviedb.org/movie/${MovieDetails.id}/reviews`} className="link"> View All Review</a></span>

                        </div>
                       
                            <div><ul>
                                {allReview}
                            </ul></div>
                            
                        </div>
                        <div>
                            <OtherDetails OtherDetails = {MovieDetails} />
                        </div>
                    </div>
                    
                    </div>
                  
                </section>
                </Fragment>
        )
    }
            </Fragment>
            )
          

}
