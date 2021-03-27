import React, { Fragment,useReducer,useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { movieCreditReducer,creditState } from '../../reducer/movie/movieCreditReducer';

import {api_key} from  '../../Keys'

const MovieCrew = () =>{
    const {id} = useParams()

    const [state, dispatch] = useReducer(movieCreditReducer, creditState)
    const Crew = state.MovieCredit.crew

    useEffect(() => {
        dispatch({type:'CLEAR_MOVIECREDIT',payload:[]})
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_MOVIECREDIT',payload:data.results}))
        .catch(err => console.log(err))

     
    }, [id])
    console.log(state)

    let crew = Crew === undefined ? (<div> not working</div>):(
        <Fragment>
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
