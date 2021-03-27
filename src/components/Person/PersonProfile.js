import React, {Fragment,useEffect,useReducer } from 'react'
import '../../css/person.css'

import axios from 'axios';
import {api_key} from  '../../Keys'

import {personReducer,initialState} from '../../reducer/person/personReducer'
import PersonInfo from './PersonInfo'
import PersonCredit from './PersonCredit'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router';

const PersonProfile = () => {
    const {id} = useParams()
    const [{PersonalDetails}, dispatch] = useReducer(personReducer, initialState);

    useEffect(() => {
        dispatch({type:'CLEAR_PERSON_DETAILS',payload:[]})
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${api_key}`)
        .then((res) => dispatch({type:'FETCH_PERSONAL_DETAILS',payload:res.data}))
        .catch(err => dispatch({type:'FETCH_ERROR_PERSON',payload:null})) 
     
    }, [id])

    let persondetails = PersonalDetails === null ?
    (
    <div>
          <h2>Oops!—We can't find the page you're looking for.</h2>
           <p>You tried to request a page that doesn't seem to exist. If you believe this to be in error, let us know on the forums.</p>
    </div>) : 
      (
        PersonalDetails.length === 0 ? (
           <Loader type="Puff" color="#00BFFF" height={80} width={80} />
       ) : (

        <Fragment>
        <section className="">
            <div className="container">
                <div className="personal-details credit-gap grid">
                    <PersonInfo details={PersonalDetails}/>
                </div>             
            </div>
        

        </section>
        <section>
            <div className="container">
          
               <PersonCredit  dept={PersonalDetails.known_for_department}/>
             
            </div>
   
        </section>
        </Fragment>
       )
       )
  


    return(

        <Fragment>
        {
          persondetails  
        }
    </Fragment>

    )
}

export default PersonProfile

