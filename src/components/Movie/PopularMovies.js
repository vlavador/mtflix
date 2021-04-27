import React, {useReducer,useEffect } from 'react'


import {api_key} from  '../../Keys'

import { useParams } from 'react-router-dom'
import {popularReducer,initialState} from '../../reducer/movie/popularReducer'

import Template from '../Template';
import TemplateList from '../TemplateList';
import Search from '../Search';


export default function PopularMovies () {
    const {id} = useParams();
    const [{PopularMovies,totalpages,error,page},dispatch] = useReducer(popularReducer, initialState)

    useEffect(() => {
        const abortCont = new AbortController();
        dispatch({type:'CLEAR_POPULAR_MOVIE',payload:[]})

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${id}`,{signal:abortCont.signal})
        .then(res => 
            {
                if(!res.ok){
                throw Error('error')
                }

                return res.json()
            })
        .then(data =>  dispatch({type:'FETCH_POPULAR_MOVIE',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_POPULAR_MOVIE',payload:[]}))
        window.scrollTo(0, 0)
        return () => abortCont.abort();

    

    }, [id])


    
     const PopularMovie = PopularMovies.length  === 0 ? (
        <Template  totalpages={totalpages} page={page} error={error} pagetype={"Popular Movies"}/>

       


    ) : 
    (
       <TemplateList data={PopularMovies} totalpages={totalpages} page={page} category="movie" link="popular" pagetype={"Popular Movies"}/>
       
    )

    return (
        
        <div>
        <Search  type="movie" placeholder="Search for a movie"/>
            {
                PopularMovie
            }   
        </div>
    )

}


