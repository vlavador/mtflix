import React, {useReducer,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {onAirReducer,initialState} from '../../reducer/television/onAirReducer'
import {api_key} from  '../../Keys'
import Template from '../Template';
import TemplateList from '../TemplateList';


export default function AiringTelevision(){
    const {id} = useParams()
    const [{OnAirSeries,totalpages,error,page}, dispatch] = useReducer(onAirReducer, initialState)
    useEffect(() => {
        dispatch({type:'CLEAR_ON_AIR_TELEVISION',payload:[]})
        fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}&page=${id}`)
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_ON_AIR_TELEVISION',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_ON_AIR_TELEVISION',payload:null}))
     
        window.scrollTo(0, 0)
    }, [id])
    let OnAir = OnAirSeries.length  === 0 ? (
        <Template  totalpages={totalpages} page={page} error={error}/>

       


    ) : 
    (
       <TemplateList data={OnAirSeries} totalpages={totalpages} page={page} category="television" link="onair"/>
       
    )
    return(
        <div>
            {
                OnAir
            }
        </div>
    )
}

