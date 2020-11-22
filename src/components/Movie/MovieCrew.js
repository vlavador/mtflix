import React from 'react'
const MovieCrew = ({Crew}) =>{
    return(
        <ul className="grid movie-crew" >
            {Crew.slice(0,6).map((crew,index) => { return( 
                <li xs={4} className="crewdesign" key={index}>  
                <p>{crew.name}</p>
                <p>{crew.job}</p>
                </li>           
            )
          })}
        </ul>
    )
}

export default MovieCrew
