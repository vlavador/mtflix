import React, { createContext, useReducer,useEffect } from 'react'

import axios from 'axios';
import {api_key} from  '../Keys'
import { useParams } from 'react-router-dom';
import {movieDetailsReducer, initialState} from '../reducer/movie/movieDetailsReducer'
import MovieDetails from '../components/Movie/MovieDetails';

export const MovieContext = createContext();


export function MovieProvider({children}) {
    const [movie,dispatch] = useReducer(movieDetailsReducer,initialState)
    const {id} = useParams();

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`).then((res) => dispatch({type:'FETCH_MOVIEDETAILS',payload:res.data})).catch(err => dispatch({type:'FETCH_NULLMOVIEDETAIL',payload:null})) 
     
    }, [id])

  
    return (
        <MovieContext.Provider value={movie}>
            <MovieDetails />
        </MovieContext.Provider>
    )
}
