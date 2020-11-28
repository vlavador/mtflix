import React,{Fragment} from 'react'
const MovieRecommendation = ({recommendation}) => {

    let movieRecommendation =  recommendation.length > 1 ? (
        <Fragment>    
        <h2>Recommendations</h2>
        <ul className="recommendation grid">
        {recommendation.slice(0,10).map((rec,index) => { return( 
         <li className="" key={index}>  
             <div>
                 <img src={'https://image.tmdb.org/t/p/w250_and_h141_face'+rec.poster_path}/>
                 <div>
                     <p>{rec.original_title}</p>
                     <span>{rec.character}</span>
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
         {movieRecommendation}
      </Fragment>
    )
}
export default MovieRecommendation
    