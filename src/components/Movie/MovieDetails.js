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

function MovieDetails() {
        
        const {id} = useParams();

        const [state, dispatch] = useReducer(movieDetailsReducer, initialState)
        const { MovieDetails } = state;
        
        useEffect(() => {

            dispatch({type:'CLEAR_MOVIEDETAILS',payload:[]})

            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
        .then(res => res.json())
        .then(data =>  dispatch({type:'FETCH_MOVIEDETAILS',payload:data}))
        .catch(err => dispatch({type:'FETCH_NULLMOVIEDETAIL',payload:null}))

        window.scrollTo(0, 0)
        
        }, [id])

    
    return (
        <Fragment>
            {
                MovieDetails === null ?
         (<div>
               <h2>Oops!—We can't find the page you're looking for.</h2>
                <p>You tried to request a page that doesn't seem to exist. If you believe this to be in error, let us know on the forums.</p>
         </div>) : 
           (
            MovieDetails.length === 0 ? (
                <div className="spinner-design container">
                <Loader type="Puff" color="#00BFFF" height={150} width={200} />
                </div>
            ) : (
                <Fragment>
                <section className='Movie-Tv-Background' style={{backgroundImage:`radial-gradient(circle at 20% 50%, rgba(11.76%, 18.43%, 23.53%, 0.98) 0%, rgba(18.82%, 25.49%, 30.59%, 0.88) 100%),url(https://image.tmdb.org/t/p/w1400_and_h450_face/${MovieDetails.backdrop_path})`}}>
                    <div className="container grid movie-tv-details">
                        <div className="poster bg-color">
                        {
                            MovieDetails.poster_path === null ?
                             (<img src={nobg} /> ) 
                            : (   <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + MovieDetails.poster_path}  alt="Lights"  />)
                        }
                     
                        </div>
                        <div className="movie-tv-padding">
                            <div className="movie-tv-detailscolor">
                            <h2 className="movie-tv-detailtitle">{MovieDetails.title}</h2>
                            </div>
                            <div className="overview-info">
                                <h3 dir="auto">Overview</h3>
                                <p>{MovieDetails.overview}</p>
                            </div>
                            {/**<MovieCrew />*/} 
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container grid movie-tv-content">
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
                <section className="container custom-padding">
                    <MovieRecommendation />
                </section>
                <section className="container custom-padding">
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
