import React, { Fragment } from 'react'
import noImg from '../../assets/noimage.png'
const PersonInfo = ({details}) =>{
    return(
        <Fragment>
            <div className="bg-color">
            {
                details.profile_path === null ?
                (<img src={noImg} />)
                :
                ( <img className="img-responsive" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${details.profile_path}`}/>)
            }
               
            </div>
            <div>
            <div>
            <h3>{details.name}</h3>
            <h4>Biography:</h4>
            <p>{details.biography}</p>
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
                <div>
                    <p>Birthday </p>
                    <span>{details.birthday}</span>
                </div>
                <div>
                    <p>Place of Birth</p>
                    <span>{details.place_of_birth}</span>
                </div>
            </div>
            </div>
            </div>
        </Fragment>
    )
}
export default PersonInfo