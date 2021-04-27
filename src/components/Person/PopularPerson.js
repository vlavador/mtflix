import React, {useReducer,useEffect } from 'react'



import {api_key} from  '../../Keys'

import { useParams } from 'react-router-dom'
import {popularPersonReducer,initialState} from '../../reducer/person/popularPersonReducer'

import Template from '../Template';
import TemplateList from '../TemplateList';
import Search from '../Search';

function PopularPerson() {

    const {id} = useParams();
    const [{PopularPerson,totalpages,error, page}, dispatch] = useReducer(popularPersonReducer,initialState);

    
     useEffect(() => {
        const abortCont = new AbortController();
        dispatch({type:'CLEAR_POPULAR_PERSON',payload:[]})    

        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${api_key}&page=${id}`,{signal:abortCont.signal})
        .then(res => 
            {
                if(!res.ok){
                throw Error('error')
                }

                return res.json()
            })
        .then(data =>  dispatch({type:'FETCH_POPULAR_PERSON',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_POPULAR_PERSON',payload:[]}))
        
 
        window.scrollTo(0, 0)
        return () => abortCont.abort();
      
    }, [id])
    let popularPerson=  PopularPerson.length  === 0 ? (
        <Template  totalpages={totalpages} page={page} error={error} pagetype={"Popular"}/>

       


    ) : 
    (
       <TemplateList data={PopularPerson} totalpages={totalpages} page={page} category="person" link="popular" pagetype={"Popular Persons"}/>
       
    )
    
  
    
    return (
    
        <div>
            <Search type="person" placeholder="Search for a person"/>
              {popularPerson}
        </div>
    )
}

export default PopularPerson
