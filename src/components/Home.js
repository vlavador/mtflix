import { Fragment, useReducer,useEffect } from 'react';
import {initialState,onAirReducer} from '../reducer/television/onAirReducer'
import {nowPlayingState,nowPlayingReducer} from '../reducer/movie/nowPlayingReducer'
import {upcomingMovieState,upcomingReducer} from '../reducer/movie/upcomingmovie'
import {api_key} from  '../Keys'
import Banner from './Home/Banner';
import '../css/home.css'
import HomePopular from './Home/HomePopular';
import { Link } from 'react-router-dom';
import TVPopular from './Home/TVPopular';

export default function Home(){
    const [{NowPlayingMovies},nowdispatch] = useReducer(nowPlayingReducer,nowPlayingState)
    const [{UpcomingMovies},upcomingdispatch] = useReducer(upcomingReducer,upcomingMovieState)
    const [{OnAirSeries},onairdispatch] = useReducer(onAirReducer,initialState)

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => upcomingdispatch({type:'FETCH_UPCOMING_MOVIE',payload:data}))
        .catch(err => upcomingdispatch({type:'FETCH_ERROR_UPCOMING_MOVIE',payload:null}))
      
    }, [])

    useEffect(() => {
        const abortCont = new AbortController();    
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`,{signal:abortCont.signal})
        .then(res => res.json())
        .then(data =>  nowdispatch({type:'FETCH_NOW_PLAYING_MOVIE',payload:data}))
        .catch(err => nowdispatch({type:'FETCH_ERROR_NOW_PLAYING_MOVIE',payload:null}))
        return () => abortCont.abort();
      
    }, [])

    useEffect(() => {

        const abortConts = new AbortController();
        fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}`,{signal:abortConts.signal})
        .then(res => res.json())
        .then(data => onairdispatch({type:'FETCH_ON_AIR_TELEVISION',payload:data}))
        .catch(err => onairdispatch({type:'FETCH_ERROR_ON_AIR_TELEVISION',payload:null}))
        return () => abortConts.abort();
      
    }, [])


    const nowplaying = NowPlayingMovies.length === 0 ? null : <Fragment>
       { 
           NowPlayingMovies.slice(0,4).map(movie =>
           <li key={movie.id}> 
           <img src={"https://image.tmdb.org/t/p/w500_and_h282_bestv2"+movie.backdrop_path} alt={movie.name} className="img-responsive" /> 
            <p>{movie.title}</p>
        
           </li>)
       }

    
    </Fragment>
    
       
        
        

    return(
        <Fragment>
            <Banner />
            <section>
                <div className="container">
                <div className="flex">
                    <div style={{"flexGrow": "8"}}>
                        <h3 className="pagetype">Popular Movies</h3>
                    </div>
                    <div className="view-popular">
                    <Link to="/movie/popular/1">See all</Link>
                    </div>

                </div>
                <HomePopular/>
                </div>
               
            </section>

            <section>
                <div className="container">
                <div className="flex">
                    <div style={{"flexGrow": "8"}}>
                        <h3 className="pagetype">Popular TV Shows</h3>
                    </div>
                    <div className="view-popular">
                    <Link to="/television/popular/1">See all</Link>
                    </div>

                </div>
                <TVPopular/>
                </div>
               
            </section>
            <section className="home-grid container grid">
                <div >
                    {/**<ul>
                    
                        {
                            nowplaying
                        }
                    </ul>*/}

                </div>
                <div>
                    {/**<ul>{
                            nowplaying
                        }</ul>*/
                    }
                </div>
            </section>
        </Fragment>
    )
}
