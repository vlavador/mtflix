import React, { Fragment } from 'react'
const PersonInfo = ({details}) =>{
    return(
        <Fragment>
            <div>
                <img className="img-responsive" src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${details.profile_path}`}/>
            </div>
            <div className="link">

            </div>
            <div>
                <h3>Personal Info</h3>
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
        </Fragment>
    )
}
export default PersonInfo