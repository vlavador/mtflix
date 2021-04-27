import React, { Fragment,useReducer,useEffect } from 'react'
import { Link,useParams } from 'react-router-dom'
import {api_key} from  '../../Keys'
import {televisionCreditReducer,creditState} from '../../reducer/television/televisionCreditReducer';


const TelevisionCrew = () =>{
    const {id} = useParams();
    const [{TelevisionCredit},dispatch] = useReducer(televisionCreditReducer,creditState)
    const Crew =  TelevisionCredit.crew
    useEffect(() => {
        const abortCont = new AbortController();
        dispatch({type:'CLEAR_TELEVISION_CREDIT',payload:[]})
        fetch(`https://api.themoviedb.org/3/tv/${id}/credits?api_key=${api_key}`,{signal:abortCont.signal})
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_TELEVISION_CREDIT',payload:data}))
        .catch(err => console.log(err))
     
        window.scrollTo(0, 0)
        return () => abortCont.abort();

    }, [id])

 
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

export default TelevisionCrew
