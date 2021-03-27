import React, {useReducer,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {airingReducer,initialState} from '../../reducer/television/airingReducer'
import {api_key} from  '../../Keys'
import Template from '../Template';
import TemplateList from '../TemplateList';


export default function AiringTelevision(){
    const {id} = useParams()
    const [{AiringSeries,totalpages,error,page}, dispatch] = useReducer(airingReducer, initialState)
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}&page=${id}`)
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_AIRING_TELEVISION',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_AIRING_TELEVISION',payload:null}))
     
        window.scrollTo(0, 0)
    }, [id])
    let Airing = AiringSeries.length  === 0 ? (
        <Template  totalpages={totalpages} page={page} error={error}/>

       


    ) : 
    (
       <TemplateList data={AiringSeries} totalpages={totalpages} page={page} category="television" link="airing"/>
       
    )
    return(
        <div>
            {
                Airing
            }
        </div>
    )
}

