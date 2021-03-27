import React, { Component, Fragment,useEffect,useReducer } from 'react'

import {Link,useParams} from 'react-router-dom'

import m66 from  '../../assets/m66.png';
import f66 from  '../../assets/f66.png';
import nobg from  '../../assets/nobg.png';

import { televisionDetailsReducer,initialState } from '../../reducer/television/televisionDetailsReducer'
import axios from 'axios';
import {api_key} from  '../../Keys'
import {televisionCreditReducer,creditState} from '../../reducer/television/televisionCreditReducer';
export default function TelevisionAllCast(){
    const {id} = useParams()
    const [{TelevisionDetails}, dispatch] = useReducer(televisionDetailsReducer, initialState)
    const [{TelevisionCredit}, creditdispatch] = useReducer(televisionCreditReducer, creditState)
    useEffect(() => {
        creditdispatch({type:'CLEAR_TELEVISION_CREDIT',payload:[]})
        fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => creditdispatch({type:'FETCH_TELEVISION_CREDIT',payload:data}))
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

    let AllCast = TelevisionCredit.length === 0 ? (null) : (TelevisionCredit.cast.map((cast)=>{
        return(
            <li className="" key={cast.id}>  
            <div className="allcastflex">
            <Link to={`/person/${cast.id}`}>
            {
                cast.profile_path === null ? (
                    <Fragment>
                        {
                            cast.gender === 1 ? 
                            (<img src={f66} className="noImage"/>):
                            (<img src={m66} className="noImage"/>)
                        }
                        </Fragment>  
                ) : (
                    <img src={'https://image.tmdb.org/t/p/w66_and_h66_face'+cast.profile_path}/>
                )
            }
            </Link>
            
                <div className="cast-padding allcastpad">
                    <p>{cast.name}</p>
                    <span>{cast.character}</span>
                </div>
            </div>
        </li>  
        )
    } ))
    let AllCrew = TelevisionCredit.length === 0 ? (null) : (TelevisionCredit.crew
        .sort((a,b) =>  a.department > b.department ? 1 : -1)
        .map((crew,index)=>{
            return(
                <li className="" key={index}>  
                <div className="allcastflex">
                <Link to={`/person/${crew.id}`}>
                {
                    crew.profile_path === null ? (
                        <Fragment>
                        {
                            crew.gender === 1 ? 
                            (<img src={f66} className="noImage"/>):
                            (<img src={m66} className="noImage"/>)
                        }
                        </Fragment>
                      
                    ) : (
                        <img src={'https://image.tmdb.org/t/p/w66_and_h66_face'+crew.profile_path}/>
                    )
                }
                </Link>
                
                    <div className="cast-padding allcastpad">
                        <p>{crew.original_name}</p>
                        <span>{crew.known_for_department}</span>
                    </div>
                </div>
            </li>  
            )
        } )
)

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
                                    <img src={nobg} className="noImage"/> 
                                ) : (
                                    <img src={'https://image.tmdb.org/t/p/w116_and_h174_face'+TelevisionDetails.poster_path}/>
                                )
                                }
                            </div>
                                <div className="allcast-content">
                                    <h2>{TelevisionDetails.original_name}</h2>
                                    <Link to={`/tv/${id}`}>← Back to main</Link>
                                </div>
                            </Fragment>
                    )
                }
                   
                </div>
            </div>
        </section>
        <section>
            <div className="container grid allcastgrid">
                <div>
                    <div className="count">
                    <h2>Cast</h2>
                    <span className="count">{TelevisionCredit.length === 0 ? (null) : (TelevisionCredit.cast.length)}</span>
                    </div>
                  
                    <ul>
                        {
                           AllCast
                            
                        }
                    </ul>
                </div>
                <div>
                <div className="count">
                    <h2>Crew</h2>
                    <span className="count">{TelevisionCredit.length === 0 ? (null) : (TelevisionCredit.crew.length)}</span>
                    </div>
                    <ul>
                        {
                            AllCrew
                        }
                    </ul>
                </div>
            </div>
        </section>
    </Fragment>

    )
}
