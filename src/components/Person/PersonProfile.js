import React, {Fragment,useEffect,useReducer } from 'react'
import '../../css/person.css'

import axios from 'axios';
import {api_key} from  '../../Keys'

import {personReducer,initialState} from '../../reducer/person/personReducer'
import PersonInfo from './PersonInfo'
import PersonCredit from './PersonCredit'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router';
import Search from '../Search'
import PageNotFound from '../PageNotFound';

const PersonProfile = () => {
    const {id} = useParams()
    const [{PersonalDetails}, dispatch] = useReducer(personReducer, initialState);

    useEffect(() => {
        const abortCont = new AbortController();
        dispatch({type:'CLEAR_PERSON_DETAILS',payload:[]})
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${api_key}`,{signal:abortCont.signal})
        .then((res) => dispatch({type:'FETCH_PERSONAL_DETAILS',payload:res.data}))
        .catch(err => dispatch({type:'FETCH_ERROR_PERSON',payload:null})) 
        return () => abortCont.abort();
     
    }, [id])

    let persondetails = PersonalDetails === null ?
    (<PageNotFound/>) : 
      (
        PersonalDetails.length === 0 ? (
            <div className="spinner-design container">
            <Loader type="Puff" color="#097ddc" height={150} width={200} />
            </div>
       ) : (

        <Fragment>
     
            <Search type="person" placeholder="Search for a person"/>
       
        <section className="">
            <div className="container ">
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

