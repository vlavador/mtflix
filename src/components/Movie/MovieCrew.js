import React, { Fragment,useReducer,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { movieCreditReducer,creditState } from '../../reducer/movie/movieCreditReducer';

import {api_key} from  '../../Keys'

const MovieCrew = () =>{
    const {id} = useParams()

    const [state, dispatch] = useReducer(movieCreditReducer, creditState)
    const Crew = state.MovieCredit.crew

    useEffect(() => {
        const abortCont = new AbortController();
        dispatch({type:'CLEAR_MOVIECREDIT',payload:[]})
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`,{signal:abortCont.signal})
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_MOVIECREDIT',payload:data}))
        .catch(err => console.log(err))
        return () => abortCont.abort();
     
    }, [id])
    console.log(state)

    let crew = Crew === undefined ? (null):(
        <Fragment>
      {Crew.length === 0 ?  null : <h3>Featured Crew</h3> }
        <ul className="grid movie-tv-crew" >
            {Crew.slice(0,6).map((crew,index) => { return( 
                <li  className="crewdesign" key={index}>  
                <p><Link to = {`/person/${crew.id}`}>{crew.name}</Link></p>
                <p>{crew.job}</p>
                </li>           
            )
          })}
        </ul>
     
   
        </Fragment>
    )
    return(
        <Fragment>
       
        {crew}
   
    </Fragment>
    )
}

export default MovieCrew
