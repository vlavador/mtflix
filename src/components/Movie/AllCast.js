import React, {Fragment, useEffect,useReducer } from 'react'

import {Link,useParams} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import { movieCreditReducer,creditState } from '../../reducer/movie/movieCreditReducer';
import m66 from  '../../assets/m66.png';
import f66 from  '../../assets/f66.png';
import nobg from  '../../assets/nobg.png';

import {api_key} from  '../../Keys'

import { movieDetailsReducer,initialState } from '../../reducer/movie/movieDetailsReducer';

export default function AllCast() {
    const {id} = useParams()
    const [{MovieDetails}, dispatch] = useReducer(movieDetailsReducer, initialState)
    const [{MovieCredit}, creditdispatch] = useReducer(movieCreditReducer, creditState)



    //Fetching Movie Details
    useEffect(() => {
        dispatch({type:'CLEAR_MOVIEDETAILS',payload:[]})

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
        .then(res => res.json())
        .then(data =>  dispatch({type:'FETCH_MOVIEDETAILS',payload:data}))
        .catch(err => dispatch({type:'FETCH_NULLMOVIEDETAIL',payload:null}))

      
    }, [])

    //Fetching Movie Credits
    useEffect(() => {
        creditdispatch({type:'CLEAR_MOVIECREDIT',payload:[]})
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
        .then(res => res.json())
        .then(data =>  creditdispatch({type:'FETCH_MOVIECREDIT',payload:data}))
        .catch(err =>  console.log(err))


        
    }, [])

          
    let AllCast = MovieCredit.length === 0 ? 
    (null) : (MovieCredit.cast.map((cast)=>{
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
    let AllCrew = MovieCredit.length === 0 ? (null) : (MovieCredit.crew
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
                
                  
                        <Fragment>
                            <div>
                                {MovieDetails.poster_path === null ? 
                                (
                                    <img src={nobg} className="noImage"/> 
                                ) : (
                                    <img src={'https://image.tmdb.org/t/p/w116_and_h174_face'+MovieDetails.poster_path}/>
                                )
                                }
                            </div>
                                <div className="allcast-content">
                                    <h2>{MovieDetails.title}</h2>
                                    <Link to={`/movie/${id}`}>← Back to movie</Link>
                                </div>
                            </Fragment>
                    
                
                   
                </div>
            </div>
        </section>
        <section>
            <div className="container grid allcastgrid">
                <div>
                    <div className="count">
                    <h2>Cast</h2>
                    <span className="count">{MovieCredit.length === 0 ? (null) : (MovieCredit.cast.length)}</span>
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
                    <span className="count">{MovieCredit.length === 0 ? (null) : (MovieCredit.crew.length)}</span>
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
    </Fragment>
    
    )

}
