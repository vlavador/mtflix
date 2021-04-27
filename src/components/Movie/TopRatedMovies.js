import React, { useReducer,useEffect } from 'react'


import {api_key} from  '../../Keys'

import {useParams } from 'react-router-dom'
import {topRatedReducer,initialState} from '../../reducer/movie/topRatedReducer'

import Template from '../Template';
import TemplateList from '../TemplateList';
import Search from '../Search';

export default function TopRatedMovies() {
    
    const {id} = useParams();
    const [{TopRatedMovies,totalpages,error,page}, dispatch] = useReducer(topRatedReducer, initialState)
    
  
    
   
    useEffect(() => {
        const abortCont = new AbortController();
        dispatch({type:'CLEAR_TOPRATED_MOVIE',payload:[]})

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${id}`,{signal:abortCont.signal})
        .then(res => res.json())
        .then(data =>  dispatch({type:'FETCH_TOPRATED_MOVIE',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_TOPRATED_MOVIE',payload:[]}))
        window.scrollTo(0, 0)
        return () => abortCont.abort();
        
        //console.log(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${id}`)
  
        

      
    }, [id])


    let TopRatedMovie = TopRatedMovies.length  === 0 ? (
        <Template  totalpages={totalpages} page={page} error={error} pagetype={"Top Rated Movies"}/>

       


    ) : 
    (
       <TemplateList data={TopRatedMovies} totalpages={totalpages} page={page} category="movie" link="toprated" pagetype={"Top Rated Movies"}/>
       
    )

    return (
        
        <div>
        <Search  type="movie" placeholder="Search for a movie"/>
            {
                TopRatedMovie
            }
        </div>
    )
}


