import React,{Fragment} from 'react'

const OtherDetails = ({OtherDetails}) => {
    return(
        <Fragment>
            <h2>Facts</h2>
            <div>
            <p>Homepage</p>
                {OtherDetails.homepage === undefined ? (<span>No Homepage Found</span>):
                    
                <span style={{wordBreak:'break-all'}}><a href={OtherDetails.homepage} >{OtherDetails.homepage}</a></span>
                }
            </div>
            <div>
            <p>Status</p>
             
             {OtherDetails.status === undefined ? (<span>No Status Found</span>):
                 
                 <span style={{wordBreak:'break-all'}}>{OtherDetails.status}</span>
                 }
            </div>
            <div>
            <p>Release Date</p>
          
          {OtherDetails.release_date === undefined ? (<span>No Release Date Found</span>):
              
              <span style={{wordBreak:'break-all'}}>{OtherDetails.release_date}</span>
              }
            </div>
            <div>
            <p>Runtime</p>
             
             {OtherDetails.runtime === undefined ? (<span>No Runtime Found</span>):
                 
                 <span style={{wordBreak:'break-all'}}>{OtherDetails.runtime}</span>
                 }
            </div>
            <div>
            <p>Revenue</p>
               
               {OtherDetails.revenue === undefined ? (<span>No Revenue Found</span>):
                   
                   <span style={{wordBreak:'break-all'}}>{OtherDetails.revenue}</span>
                   }
            </div>
            <div>
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
            <div>
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
        </Fragment>
    )
}

export default OtherDetails;