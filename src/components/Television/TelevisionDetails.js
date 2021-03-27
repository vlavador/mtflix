import React, { Component,Fragment,useEffect,useReducer } from 'react'

import TelevisionCast from './TelevisionCast'
import TelevisionCrew from './TelevisionCrew'
import TelevisionRecommendation from './TelevisionRecommendation'
import TelevisionReview from './TelevisionReview'
import OtherDetails from './OtherDetails'
import SimilarTelevision from './SimilarTelevision'
import Loader from 'react-loader-spinner'
import nobg from '../../assets/nobg.png'

import { useParams } from 'react-router'
import { televisionDetailsReducer,initialState } from '../../reducer/television/televisionDetailsReducer';
import {api_key} from  '../../Keys'

export default function TelevisionDetails(){
    const {id} = useParams()

    const [{TelevisionDetails}, dispatch] = useReducer(televisionDetailsReducer, initialState)
    useEffect(() => {
        dispatch({type:'CLEAR_TELEVISION_DETAILS',payload:[]})
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_TELEVISION_DETAILS',payload:data}))
        .catch(err => dispatch({type:'FETCH_NULL_TELEVISION_DETAIL',payload:null}))
        window.scrollTo(0, 0)
      
    }, [id])
    return(
        <Fragment>
        {
            TelevisionDetails === null ?(
                <div>
                    <h2>Oops!—We can't find the page you're looking for.</h2>
                    <p>You tried to request a page that doesn't seem to exist. If you believe this to be in error, let us know on the forums.</p>
                </div>  
            ) : (
                TelevisionDetails.length === 0 ? (
                    <div className="spinner-design container">
                        <Loader type="Puff" color="#00BFFF" height={150} width={200} />
                    </div>   
                ) : (
                    <Fragment>
                        <section className='Movie-Tv-Background' style={{backgroundImage:`radial-gradient(circle at 20% 50%, rgba(11.76%, 18.43%, 23.53%, 0.98) 0%, rgba(18.82%, 25.49%, 30.59%, 0.88) 100%),url(https://image.tmdb.org/t/p/w1400_and_h450_face/${TelevisionDetails.backdrop_path})`}}>
                            <div className="container grid movie-tv-details">
                                <div className="poster bg-color">
                                {
                                    TelevisionDetails.poster_path === null ?
                                    (<img src={nobg} /> ) 
                                    : (   <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + TelevisionDetails.poster_path}  alt="Lights"  />)
                                }
                            
                                </div>
                                <div className="movie-tv-padding">
                                    <div className="movie-tv-detailscolor">
                                    <h2 className="movie-tv-detailtitle">{TelevisionDetails.original_name}</h2>
                                    </div>
                                    <div className="overview-info">
                                        <h3 dir="auto">Overview</h3>
                                        <p>{TelevisionDetails.overview}</p>
                                    </div>
                                    {/**<TelevisionCrew Crew = {TelevisionCredit.crew}/> */}
                                </div>
                            </div>
                        </section>
                        <section className="content">
                            <div className="container grid movie-tv-content">
                                <div className="">
                                <div className="cast-padding-bottom"> 
                                <TelevisionCast/>
                                </div>
                                <div className="movie-tv-review">
                                <TelevisionReview title={TelevisionDetails.title} />
                                </div>  
                                </div>
                        
                            <div className=""><OtherDetails OtherDetails = {TelevisionDetails}/></div>
                            </div>  
                        </section>
                        <section className="container custom-padding">
                            <TelevisionRecommendation />
                        </section>
                        <section className="container custom-padding">
                            <SimilarTelevision/>
                        </section>
                    </Fragment>
                )
            )
        }

        </Fragment>

    )
}


