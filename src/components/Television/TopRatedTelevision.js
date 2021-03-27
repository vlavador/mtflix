import React, {useReducer,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {topRatedReducer,initialState} from '../../reducer/television/topRatedReducer'
import {api_key} from  '../../Keys'
import Template from '../Template';
import TemplateList from '../TemplateList';


export default function TopRatedTelevision(){
    const {id} = useParams()
    const [{TopRatedSeries,totalpages,error,page}, dispatch] = useReducer(topRatedReducer, initialState)
    useEffect(() => {
        dispatch({type:'CLEAR_TOP_RATED_TELEVISION',payload:[]})
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${api_key}&page=${id}`)
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_TOP_RATED_TELEVISION',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_TOP_RATED_TELEVISION',payload:null}))
     
        window.scrollTo(0, 0)
    }, [id])
   
    let TopRated = TopRatedSeries.length  === 0 ? (
        <Template  totalpages={totalpages} page={page} error={error}/>

       


    ) : 
    (
       <TemplateList data={TopRatedSeries} totalpages={totalpages} page={page} category="television" link="toprated"/>
       
    )
    return(
        <div>
            {
                TopRated
            }
        </div>
    )
}

