import React, {useReducer,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {popularReducer,initialState} from '../../reducer/television/popularReducer'
import {api_key} from  '../../Keys'
import Template from '../Template';
import TemplateList from '../TemplateList';


export default function TopRatedTelevision(){
    const {id} = useParams()
    const [{PopularSeries,totalpages,error,page}, dispatch] = useReducer(popularReducer, initialState)
    useEffect(() => {
        dispatch({type:'CLEAR_POPULAR_TELEVISION',payload:[]})
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&page=${id}`)
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_POPULAR_TELEVISION',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_POPULAR_TELEVISION',payload:null}))
     
        window.scrollTo(0, 0)
    }, [id])
    let Popular = PopularSeries.length  === 0 ? (
        <Template  totalpages={totalpages} page={page} error={error}/>

       


    ) : 
    (
       <TemplateList data={PopularSeries} totalpages={totalpages} page={page} category="television" link="popular"/>
       
    )
    return(
        <div>
            {
                Popular
            }
        </div>
    )
}

