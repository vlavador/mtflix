import React, {useReducer,useEffect } from 'react'



import {api_key} from  '../../Keys'

import { useParams } from 'react-router-dom'
import {upcomingReducer,upcomingMovieState} from '../../reducer/movie/upcomingmovie'

import Template from '../Template';
import TemplateList from '../TemplateList';
import Search from '../Search';

function UpcomingMovies() {

    const {id} = useParams();
    const [{UpcomingMovies,totalpages,error, page}, dispatch] = useReducer(upcomingReducer, upcomingMovieState);

    
     useEffect(() => {
        const abortCont = new AbortController();
        dispatch({type:'CLEAR_UPCOMING_MOVIE',payload:[]})    

        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&page=${id}`,{signal:abortCont.signal})
        .then(res => res.json())
        .then(data =>  dispatch({type:'FETCH_UPCOMING_MOVIE',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_UPCOMING_MOVIE',payload:[]}))
        window.scrollTo(0, 0)
        return () => abortCont.abort();
        
  
      
    }, [id])
    let UpcomingMovie= UpcomingMovies.length  === 0 ? (
        <Template  totalpages={totalpages} page={page} error={error} pagetype={"Upcoming Movies"}/>

       


    ) : 
    (
       <TemplateList data={UpcomingMovies} totalpages={totalpages} page={page} category="movie" link="upcoming" pagetype={"Upcoming Movies"}/>
       
    )
    
  
    
    return (
    
        <div>
            <Search type="movie" placeholder="Search for a movie"/>
              {UpcomingMovie}
        </div>
    )
}

export default UpcomingMovies
