import React, {useReducer,useEffect } from 'react'


import {api_key} from  '../../Keys'

import {useParams } from 'react-router-dom'
import {nowPlayingReducer,nowPlayingState} from '../../reducer/movie/nowPlayingReducer'

import Template from '../Template';
import TemplateList from '../TemplateList';
import Search from '../Search';

export default function NowPlayingMovies() {
    
    const {id} = useParams();
    const [{NowPlayingMovies,totalpages,error,page}, dispatch] = useReducer(nowPlayingReducer, nowPlayingState)
    

   
    useEffect(() => {
        const abortCont = new AbortController();
        dispatch({type:'CLEAR_NOW_PLAYING_MOVIE',payload:[]})

        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&page=${id}`,{signal:abortCont.signal})
        .then(res => res.json())
        .then(data =>  dispatch({type:'FETCH_NOW_PLAYING_MOVIE',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_NOW_PLAYING_MOVIE',payload:null}))

        //console.log(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${id}`)
      
        
        window.scrollTo(0, 0)
        return () => abortCont.abort();
    }, [id]) 

    let NowPlayingMovie = NowPlayingMovies.length  === 0 ? (
        <Template  totalpages={totalpages} page={page} error={error} pagetype={"Now Playing Movies"}/>

       


    ) : 
    (
       <TemplateList data={NowPlayingMovies} totalpages={totalpages} page={page} category="movie" link="nowplaying" pagetype={"Now Playing Movies"}/>
       
    )

    return (
       
        <div>
         <Search  type="movie" placeholder="Search for a movie" />
            {
                NowPlayingMovie
            }
        </div>
    )
}
