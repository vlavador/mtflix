import React, { Fragment,useEffect,useState,useReducer} from 'react'
import MovieCredit from './MovieCredit'
import TvCredit from './TvCredit'
import noimage from '../../assets/PNoImage.png'
import { Link } from 'react-router-dom'

import {personReducer,initialState} from '../../reducer/person/personReducer'
import { useParams } from 'react-router';
import axios from 'axios';
import {api_key} from  '../../Keys'



const PersonCredit = ({dept}) => {

    const {id} = useParams();
    const [{CombinedCredits}, dispatch] = useReducer(personReducer, initialState);
    const [type,setType] = useState('movie');

    useEffect(() => {

        axios.get(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${api_key}`)
        .then((res) => dispatch({type:'FETCH_COMBINED_CREDITS',payload:res.data}))
        .catch(err => console.log(err)) 
   
    }, [id])
    const changeType =(type) => {
     
       setType(type)
    }

    let filterMovie = CombinedCredits.length === 0 ? (null):(
        CombinedCredits.cast.filter(cred => {return cred.media_type === "movie"})
     )
     let filterTV = CombinedCredits.length === 0 ? (null):(
        CombinedCredits.cast.filter(cred => {return cred.media_type === "tv"})
     )

   
       
    let cre =  CombinedCredits.cast === undefined ? (null):(

        CombinedCredits.cast.length === 0 ? (
            <p>We don't find any credits in the database</p>
        ) :
        (
        <Fragment>
            <ul className="grid credit">
            {
                CombinedCredits.cast.sort((a,b) => {return b.popularity - a.popularity})
        .slice(0,10)
        .map((cast,index) => {
            return(
                <li key={index}>
              
                    <div>
                        <div className="bg-color">
                        {
                            cast.backdrop_path === null ? (<img src={noimage}/>) 
                            : 
                            ( 
                                <Link to={`/movie/${cast.id}`}>
                                <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2'+cast.backdrop_path} alt={cast.original_title}/>
                                </Link>
                                )
                        }

                        </div>
                       
                        <div>
                            <p>
                            <Link to={`/movie/${cast.id}`} className="link">     
                            {cast.media_type === "tv" ? (cast.original_name):(cast.original_title) }
                            </Link>
                            </p>
           
                        </div>
                    </div>
            
            </li>)}
        )}
            </ul>
        </Fragment>
        )
        
    )
  
    
  
    
     
    return(
        <Fragment>
            
            <div className="p-known">
                <h3>Known For:</h3>
                {cre}
            </div>

            <div>
                <div className="flex pflex">
                    <div style={{"flexGrow": "8"}} >
                    <h2>{dept}</h2>
                    </div>  
                <div>   
                    <button className={ type === 'movie' ? ("active"):(null)} onClick={() => changeType("movie")}>Movie</button>
                    <span>/</span>
                    <button className={ type === 'tv' ? ("active"):(null)}  onClick={() => changeType("tv")}>TV</button></div>
                </div>
                <div>

                </div>
           
                    {
                        type === 'movie' ? <MovieCredit filterMovie = {filterMovie} id = {id}/> : <TvCredit filterTv = {filterTV} id={id} />
                    }
                
            <div>
                {

                }
            </div>
            </div>
    
        </Fragment>

    )
}
export default PersonCredit