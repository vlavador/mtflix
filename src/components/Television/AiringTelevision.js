import React, {useReducer,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {airingReducer,initialState} from '../../reducer/television/airingReducer'
import {api_key} from  '../../Keys'
import Template from '../Template';
import TemplateList from '../TemplateList';
import Search from '../Search';


export default function AiringTelevision(){
    const {id} = useParams()
    const [{AiringSeries,totalpages,error,page}, dispatch] = useReducer(airingReducer, initialState)
    useEffect(() => {
        const abortCont = new AbortController();
        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}&page=${id}`,{signal:abortCont.signal})
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_AIRING_TELEVISION',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_AIRING_TELEVISION',payload:null}))
     
        window.scrollTo(0, 0)
        return () => abortCont.abort();
    }, [id])
    let Airing = AiringSeries.length  === 0 ? (
        <Template  totalpages={totalpages} page={page} error={error} pagetype={"Airing TV Shows"}/>

       


    ) : 
    (
       <TemplateList data={AiringSeries} totalpages={totalpages} page={page} category="television" link="airing" pagetype={"Airing TV Shows"}/>
       
    )
    return(
        <div>
            <Search  type="tv" placeholder="Search for a tv show"/>
            {
                Airing
            }
        </div>
    )
}

