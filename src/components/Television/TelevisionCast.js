import React,{Fragment,useReducer,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import SkeletonArticle from '../skeletons/SkelotonArticle'
import MaleImage from '../../assets/male-noimage.png'
import FeMaleImage from '../../assets/female-noimage.png'
import {api_key} from  '../../Keys'
import {televisionCreditReducer,creditState} from '../../reducer/television/televisionCreditReducer';

const TelevisionCast = () => {
    const {id} = useParams();
    const [{TelevisionCredit},dispatch] = useReducer(televisionCreditReducer,creditState)
    const Cast =  TelevisionCredit.cast
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

    let cast = Cast === undefined ? (<SkeletonArticle />):(
        <Fragment>
     
        <h2 className="header-title">Cast</h2>
        {
            Cast.length === 0 ? <p className="bottom10">We don't have any cast for this TV show. </p> : 
            <Fragment>
            <ul className="cast-design  grid">
           {Cast.slice(0,6).map((cast,index) => { return( 
           
            <li className="" key={index}>  
                <div >
                    <div className="bg-color">
                    {
                        cast.profile_path === null ? 
                        (cast.gender === 1 ? 
                            (<img src={FeMaleImage}  alt={cast.name}/>) 
                            :
                            (<img src={MaleImage}  alt={cast.name}/>)
                        ) : 
                        ( 
                            <Link to={`/person/${cast.id}`}>
                            <img src={'https://image.tmdb.org/t/p/w138_and_h175_face'+cast.profile_path} alt={cast.name}/>
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
            </Fragment>
        }
    <Link to={`/tv/${id}/cast`}>View Cast and Crew</Link>
    

    </Fragment>
    )
    return(
        <Fragment>
        {cast}
    </Fragment>
    )


   
}
export default TelevisionCast
