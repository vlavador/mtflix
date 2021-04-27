import React, { Fragment } from 'react'

import noImg from '../../assets/noimage.png'
import{addSpace} from '../functions'
const PersonInfo = ({details}) =>{
    
 
  
    return(
        <Fragment>
            <div className="bg-color">
            {
                details.profile_path === null ?
                (<img src={noImg} alt={details.name} />)
                :
                ( <img className="img-responsive" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${details.profile_path}`} alt={details.name}/>)
            }
               
            </div>
            <div>
            <div>
            <h3>{details.name}</h3>
            <h4>Biography:</h4>
            {
                details.biography === "" ? 
                (<p>We don't have a biography for {details.name}.</p>) :
                (<Fragment>
                    <div className="overflow">

                    {addSpace(details.biography)}
                    </div>
                  
                    <a href={`https://www.themoviedb.org/person/${details.id}`} target="_blank" rel="noreferrer" >Read More...</a>
                </Fragment>)
            }
           
            </div>
            <div className="personal-info">
            <h3>Personal Info</h3>
                <div className="other-info">
              
                <div>
                    <p>Known for</p>
                    <span>{details.known_for_department}</span>
                </div>
                <div>
                    <p>Gender</p>
                    <span>{details.gender === 2 ? 'Male' : 'Female' }</span>
                </div>
                {
                    details.birthday === null ? 
                    null :  ( <div> 
                    <p>Birthday </p>
                    <span>{details.birthday}</span>
                    </div>
                    )
                }

                {
                    details.place_of_birth === null ? 
                    null :  (         
                <div>
                    <p>Place of Birth</p>
                    <span>{details.place_of_birth}</span>
                </div> )
                }
            </div>
            </div>
            </div>
        </Fragment>
    )
}
export default PersonInfo