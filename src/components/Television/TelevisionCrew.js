import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
const TelevisionCrew = ({Crew}) =>{
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

export default TelevisionCrew
