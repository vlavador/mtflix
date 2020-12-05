import React, { Fragment } from 'react'
import MovieCredit from './MovieCredit'
import TvCredit from './TvCredit'

const PersonCredit = ({otherdetail,credits,changeType,type}) => {
  
    let filterMovie = credits.length === 0 ? (null):(
        credits.cast.filter(cred => {return cred.media_type === "movie"})
     )
     let filterTV = credits.length === 0 ? (<div>wala</div>):(
        credits.cast.filter(cred => {return cred.media_type === "tv"})
     )

   

    let cre = credits.length === 0 ? (<div>wala</div>):(
        credits.cast.sort((a,b) => {return b.popularity - a.popularity})
        .slice(0,10)
        .map((cast) => {
            return(
                <li key={cast.id}>
                    <div>
                        <img src={'https://image.tmdb.org/t/p/w150_and_h225_bestv2'+cast.backdrop_path}/>
                        <div>
                            <p>{cast.media_type === "tv" ? (cast.original_name):(cast.original_title) }</p>
           
                        </div>
                    </div>
            
            </li>)}
        )
    )
    let sortAllCredit =  credits.length === 0 ? (<div>wala</div>):(
        credits.cast.sort((a,b) => {return b.release_date - a.release_date})
        .map((cast) => {
            return(
                <li key={cast.id}>
                    <div>
          
                        <div>
                            <p>{cast.media_type === "tv" ? (cast.original_name):(cast.original_title) }</p>
           
                        </div>
                    </div>
            
            </li>)}
        )
    )
    
  
    

    return(
        <Fragment>
            <div><h3>{otherdetail.name}</h3></div>
            <div><p>{otherdetail.biography}</p></div>
            <div className="credit-width">
         
            <ul className="grid credit">
                {cre}
            </ul>
            </div>

            <div>
            <div className="flex pflex">
            <div style={{"flexGrow": "8"}} >
            <h2>Acting</h2>
            </div>
         
            <div>   
        
            <button className={ type == "movie" ? ("active"):(null)} onClick={() => changeType("movie")}>Movie</button>
            <span>/</span>
            <button className={ type == "tv" ? ("active"):(null)}  onClick={() => changeType("tv")}>TV</button></div>
            </div>
          
                
             


            <ul className="pcredit"> 
                {
                    type == "movie" ? <MovieCredit filterMovie = {filterMovie}/>: <TvCredit filterTv = {filterTV}/>
                }
                </ul>
            </div>
    
        </Fragment>

    )
}
export default PersonCredit