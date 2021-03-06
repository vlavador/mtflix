import React,{Fragment} from 'react'

const OtherDetails = ({OtherDetails}) => {
    let otherDetails = OtherDetails.length !==0? ( <Fragment>
        <h2 className="header-title">Facts</h2>
        <div className="otherdetails">
        <p>Homepage</p>
            {OtherDetails.homepage === undefined ? (<span>No Homepage Found</span>):
                
            <span style={{wordBreak:'break-all'}}><a href={OtherDetails.homepage} >{OtherDetails.homepage}</a></span>
            }
        </div>
        <div className="otherdetails">
        <p>Status</p>
         
         {OtherDetails.status === undefined ? (<span>No Status Found</span>):
             
             <span style={{wordBreak:'break-all'}}>{OtherDetails.status}</span>
             }
        </div>
        <div className="otherdetails">
        <p>First Air Date</p>
      
      {OtherDetails.first_air_date === undefined ? (<span>-</span>):
          
          <span style={{wordBreak:'break-all'}}>{OtherDetails.first_air_date}</span>
          }
        </div>
        <div className="otherdetails">
        <p>Runtime</p>
         
         {OtherDetails.episode_run_time === undefined ? (<span>-</span>):
             
             <span style={{wordBreak:'break-all'}}>{OtherDetails.episode_run_time}</span>
             }
        </div>
        <div className="otherdetails">
        <p>Genre</p>
           
           {OtherDetails.genres === undefined ? (<span>No Genre Found</span>):
            (
                OtherDetails.genres.length === 0 ? (<span>No Genre Found</span>):(
                        <ul className="ul-genre-design">
                     {   OtherDetails.genres.map(genre =>
                                <li className="li-genre-design" key={genre.id}>
                                <span  className="genre-design">
                                {genre.name}
                                </span>
                                
                                </li>
                            )
                        }
                        </ul>
                       
                    )
            )
               
              
               }
        </div>
        <div className="otherdetails">
        <p>Production Companies</p>
            
            { OtherDetails.production_companies === undefined ?
            (<p>No Production Company Found</p>):(
             OtherDetails.production_companies.length === 0?(<span>No Production Company Found </span>):(
                 OtherDetails.production_companies.map(companies => {
             return(
                     <p style={{fontWeight:'400',marginTop:'5px'}} key={companies.id}>{companies.name}</p>
                 
             )                    
              
             })
             )

            ) }
        </div>
        <div className="otherdetails">
        <p>Production Countries</p>
        { OtherDetails.production_countries === undefined ?
           (undefined):(

        OtherDetails.production_countries.length === 0?(<span>No Production Countries Found </span>):(
            OtherDetails.production_countries.map((countries,index) => {
                
            return(
                    <p style={{fontWeight:'400',marginTop:'5px'}} key={index}>{countries.name}</p>
                
            )                    
             
            }
            )
  )
        


           ) }

        </div>
    </Fragment>) :(
      null
    )
    return(
     <Fragment>
          {otherDetails}
     </Fragment>
           
       
    )
}

export default OtherDetails;