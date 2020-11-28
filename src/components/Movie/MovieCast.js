import React,{Fragment} from 'react'
import SkeletonArticle from '../skeletons/SkelotonArticle'
const MovieCast = ({Cast}) => {
    let cast = Cast === undefined ? (<SkeletonArticle />):(
        <Fragment>
        <h2>Cast</h2>
        <ul className="cast-design  grid">
           {Cast.slice(0,6).map((cast,index) => { return( 
            <li className="" key={index}>  
                <div>
                    <img src={'https://image.tmdb.org/t/p/w138_and_h175_face'+cast.profile_path}/>
                    <div className="cast-padding">
                        <p>{cast.name}</p>
                        <span>{cast.character}</span>
                    </div>
                </div>
            </li>           
        )
      })}
    </ul>
    </Fragment>
    )
    return(
        <Fragment>
        {cast}
    </Fragment>
    )


   
}
export default MovieCast
