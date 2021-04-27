import React, { useEffect,useReducer,Fragment} from 'react'
import { useParams } from 'react-router-dom'
import { movieDetailsReducer,initialState } from '../../reducer/movie/movieDetailsReducer';


import {api_key} from  '../../Keys'


import MovieCast from './MovieCast'
import MovieCrew from './MovieCrew'
import MovieRecommendation from './MovieRecommendation'
import MovieReview from './MovieReview'
import OtherDetails from './OtherDetails'
import SimilarMovies from './SimilarMovies'
import Loader from 'react-loader-spinner'
import nobg from '../../assets/nobg.png'
import PageNotFound from '../PageNotFound';


function MovieDetails() {
        
        const {id} = useParams();

        const [state, dispatch] = useReducer(movieDetailsReducer, initialState)
        const { MovieDetails } = state;
        
        useEffect(() => {
            const abortCont = new AbortController();
            dispatch({type:'CLEAR_MOVIEDETAILS',payload:[]})

            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`,{signal:abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error('error')
                }
           return  res.json()})
        .then(data =>  dispatch({type:'FETCH_MOVIEDETAILS',payload:data}))
        .catch(err => dispatch({type:'FETCH_NULLMOVIEDETAIL',payload:null}))

        window.scrollTo(0, 0)
        return () => abortCont.abort();
        }, [id])

    
    return (
        <Fragment>
            {
                MovieDetails === null ?
         (<PageNotFound />) : 
           (
            MovieDetails.length === 0 ? (
                <div className="spinner-design container">
                <Loader type="Puff" color="#097ddc" height={150} width={200} />
                </div>
            ) : (
                <Fragment>
                <section className='Movie-Tv-Background' style={{backgroundImage:`radial-gradient(circle at 20% 50%, rgba(11.76%, 18.43%, 23.53%, 0.98) 0%, rgba(18.82%, 25.49%, 30.59%, 0.88) 100%),url(https://image.tmdb.org/t/p/w1400_and_h450_face/${MovieDetails.backdrop_path})`}}>
                    <div className="container grid movie-tv-details">
                        <div className="poster bg-color">
                        {
                            MovieDetails.poster_path === null ?
                             (<img src={nobg}  alt={MovieDetails.title} /> ) 
                            : (   <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + MovieDetails.poster_path}  alt={MovieDetails.title}  />)
                        }
                     
                        </div>
                        <div className="movie-tv-padding moviedetailscolor">
                            <div className="movie-tv-detailscolor">
                            <h2 className="movie-tv-detailtitle">{MovieDetails.title}</h2>
                            </div>
                            <div className="overview-info">
                                <h3 dir="auto">Overview</h3>
                                {
                                    MovieDetails.overview === "" ? 
                                    <p>We don't have any overview for this movie.</p> :    <p>{MovieDetails.overview}</p>
                                }
                             
                            </div>
                            <div className="feature-crew">
                            <MovieCrew />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container grid movie-tv-content border-content">
                        <div className="">
                           <div className="cast-padding-bottom"> 
                           <MovieCast />
                           </div>
                      <div className="movie-tv-review">
                        <MovieReview title={MovieDetails.title} />
                        </div>  
                        
                        </div>
                 
                       <div className="">
                         <OtherDetails OtherDetails = {MovieDetails}/>
                        </div>
                    </div>  
                </section>
                <section  className="m20">
                    <MovieRecommendation />
                </section>
                <section className="m20" >
                    <SimilarMovies  />
                </section>
                </Fragment>
            )
           )
            }
        </Fragment>
    )
}

export default MovieDetails
