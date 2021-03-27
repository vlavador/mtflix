import React, {useReducer,useEffect } from 'react'



import {api_key} from  '../../Keys'

import { useParams } from 'react-router-dom'
import {upcomingReducer,initialState} from '../../reducer/movie/upcomingmovie'

import Template from '../Template';
import TemplateList from '../TemplateList';

function UpcomingMovies() {

    const {id} = useParams();
    const [{UpcomingMovies,totalpages,error, page}, dispatch] = useReducer(upcomingReducer, initialState);

    
     useEffect(() => {
            
        dispatch({type:'CLEAR_UPCOMING_MOVIE',payload:[]})    

        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&page=${id}`)
        .then(res => res.json())
        .then(data =>  dispatch({type:'FETCH_UPCOMING_MOVIE',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_UPCOMING_MOVIE',payload:null}))
        
 
        window.scrollTo(0, 0)
      
    }, [id])
    let UpcomingMovie= UpcomingMovies.length  === 0 ? (
        <Template  totalpages={totalpages} page={page} error={error}/>

       


    ) : 
    (
       <TemplateList data={UpcomingMovies} totalpages={totalpages} page={page} category="movie" link="upcoming"/>
       
    )
    
  
    
    return (
    
        <div>
              {UpcomingMovie}
        </div>
    )
}

export default UpcomingMovies
