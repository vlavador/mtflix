import React, { Component,Fragment,useReducer,useEffect } from 'react'


import {api_key} from  '../../Keys'

import { useParams } from 'react-router-dom'
import {popularReducer,initialState} from '../../reducer/movie/popularReducer'

import Template from '../Template';
import TemplateList from '../TemplateList';


export default function PopularMovies () {
    const {id} = useParams();
    const [{PopularMovies,totalpages,error, page}, dispatch] = useReducer(popularReducer, initialState)

    useEffect(() => {
        
        dispatch({type:'CLEAR_POPULAR_MOVIE',payload:[]})

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${id}`)
        .then(res => res.json())
        .then(data =>  dispatch({type:'FETCH_POPULAR_MOVIE',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_POPULAR_MOVIE',payload:null}))

    
        window.scrollTo(0, 0)
    }, [id])


    
     let PopularMovie = PopularMovies.length  === 0 ? (
        <Template  totalpages={totalpages} page={page} error={error}/>

       


    ) : 
    (
       <TemplateList data={PopularMovies} totalpages={totalpages} page={page} category="movie" link="toprated"/>
       
    )

    return (
        
        <div>
            {
                PopularMovie
            }
        </div>
    )

}


