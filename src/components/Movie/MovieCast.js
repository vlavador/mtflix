import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import SkeletonArticle from '../skeletons/SkelotonArticle'
import MaleImage from '../../assets/male-noimage.png'
import FeMaleImage from '../../assets/female-noimage.png'
const MovieCast = ({Cast,id}) => {
    console.log(Cast)
    let cast = Cast === undefined ? (<SkeletonArticle />):(
        <Fragment>
        <h2 className="header-title">Cast</h2>
        <ul className="cast-design  grid">
           {Cast.slice(0,6).map((cast,index) => { return( 
            <li className="" key={index}>  
                <div >
                    <div className="bg-color">
                    {
                        cast.profile_path === null ? 
                        (cast.gender === 1 ? 
                            (<img src={FeMaleImage}/>) 
                            :
                            (<img src={MaleImage} />)
                        ) : 
                        (  <img src={'https://image.tmdb.org/t/p/w138_and_h175_face'+cast.profile_path}/>)
                        
                    }
                  
                    </div>
                
                    <div className="cast-padding">
                        <p>{cast.name}</p>
                        <span>{cast.character}</span>
                    </div>
                </div>
            </li>           
        )
      })}
    </ul>
    <Link to={`/movie/${id}/cast`}>View Cast and Crew</Link>
    

    </Fragment>
    )
    return(
        <Fragment>
        {cast}
    </Fragment>
    )


   
}
export default MovieCast
