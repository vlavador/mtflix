import React, { Fragment } from 'react'
const SimilarMovies = ({similar}) => {
    
    let similarmovie =  similar.length > 1 ? (
        <Fragment>
            <h2>Similar Movie</h2>
            <ul className="similar grid">
                {similar.slice(0,10).map((similarmovie,index) => { return( 
                <li className="" key={index}>  
                    <div>
                        <img src={'https://image.tmdb.org/t/p/w250_and_h141_face'+similarmovie.poster_path}/>
                        <div>
                            <p>{similarmovie.original_title}</p>
                            <span>{similarmovie.character}</span>
                        </div>
                    </div>
                </li>           
            )
        })}
 </ul>
        </Fragment>
 
    
    ) : (<div> not working</div>)
    return(
      <Fragment>
          {similarmovie}
      </Fragment>
    )
}
export default SimilarMovies