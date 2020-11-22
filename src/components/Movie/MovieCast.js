import React from 'react'
const MovieCast = ({Cast}) => {
 
    return(
        <ul className="movie-cast cast-design grid">
               {Cast.slice(0,6).map((cast,index) => { return( 
                <li xs={4} className="" key={index}>  
                    <div>
                        <img src={'https://image.tmdb.org/t/p/w138_and_h175_face'+cast.profile_path}/>
                        <div>
                            <p>{cast.name}</p>
                            <span>{cast.character}</span>
                        </div>
                    </div>
                </li>           
            )
          })}
        </ul>
    )
}
export default MovieCast