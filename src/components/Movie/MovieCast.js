import React,{Fragment,useReducer,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import SkeletonArticle from '../skeletons/SkelotonArticle'
import MaleImage from '../../assets/male-noimage.png'
import FeMaleImage from '../../assets/female-noimage.png'

import { movieCreditReducer,creditState } from '../../reducer/movie/movieCreditReducer';

import {api_key} from  '../../Keys'

const MovieCast = () => {
    const {id} = useParams();

    const [state, dispatch] = useReducer(movieCreditReducer, creditState)

    const Cast = state.MovieCredit.cast

    
    useEffect(() => {
        dispatch({type:'CLEAR_MOVIECREDIT',payload:[]})
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
        .then(res => res.json())
        .then(data =>  dispatch({type:'FETCH_MOVIECREDIT',payload:data}))
        .catch(err => err => console.log(err))

     
     
    }, [id])
    console.log(state)

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
                        ( 
                            <Link to={`/person/${cast.id}`}>
                            <img src={'https://image.tmdb.org/t/p/w138_and_h175_face'+cast.profile_path}/>
                            </Link>
                            )
                        
                    }
                  
                    </div>
                
                    <div className="cast-padding">
                        <p> <Link to={`/person/${cast.id}`}>{cast.name}     </Link></p>
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
