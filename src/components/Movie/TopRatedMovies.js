import React, { useReducer,useEffect } from 'react'


import {api_key} from  '../../Keys'

import {useParams } from 'react-router-dom'
import {topRatedReducer,initialState} from '../../reducer/movie/topRatedReducer'

import Template from '../Template';
import TemplateList from '../TemplateList';

export default function TopRatedMovies() {
    
    const {id} = useParams();
    const [{TopRatedMovies,totalpages,error,page}, dispatch] = useReducer(topRatedReducer, initialState)
    
  
    
   
    useEffect(() => {
        dispatch({type:'CLEAR_TOPRATED_MOVIE',payload:[]})

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${id}`)
        .then(res => res.json())
        .then(data =>  dispatch({type:'FETCH_TOPRATED_MOVIE',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_TOPRATED_MOVIE',payload:[]}))
        
        //console.log(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=${id}`)
  
        
        window.scrollTo(0, 0)
      
    }, [id])


    let TopRatedMovie = TopRatedMovies.length  === 0 ? (
        <Template  totalpages={totalpages} page={page} error={error}/>

       


    ) : 
    (
       <TemplateList data={TopRatedMovies} totalpages={totalpages} page={page} category="movie" link="toprated"/>
       
    )

    return (
        
        <div>
            {
                TopRatedMovie
            }
        </div>
    )
}


