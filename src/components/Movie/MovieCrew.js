import React, { Fragment } from 'react'
const MovieCrew = ({Crew}) =>{
    let crew = Crew === undefined ? (<div> not working</div>):(
        <Fragment>
        <ul className="grid movie-crew" >
            {Crew.slice(0,6).map((crew,index) => { return( 
                <li  className="crewdesign" key={index}>  
                <p>{crew.name}</p>
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
