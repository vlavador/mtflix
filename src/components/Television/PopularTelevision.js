import React, {useReducer,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {popularReducer,initialState} from '../../reducer/television/popularReducer'
import {api_key} from  '../../Keys'
import Template from '../Template';
import TemplateList from '../TemplateList';
import Search from '../Search';


export default function TopRatedTelevision(){
    const {id} = useParams()
    const [{PopularSeries,totalpages,error,page}, dispatch] = useReducer(popularReducer, initialState)
    useEffect(() => {
        const abortCont = new AbortController();
        dispatch({type:'CLEAR_POPULAR_TELEVISION',payload:[]})
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&page=${id}`,{signal:abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error('error')
                }
           return res.json()
        })
        .then(data => dispatch({type:'FETCH_POPULAR_TELEVISION',payload:data}))
        .catch(err => dispatch({type:'FETCH_ERROR_POPULAR_TELEVISION',payload:[]}))
     
        window.scrollTo(0, 0)
        return () => abortCont.abort();
    }, [id])
    let Popular = PopularSeries.length  === 0 ? (
        <Template  totalpages={totalpages} page={page} error={error} pagetype={"Popular TV Shows"}/>

       


    ) : 
    (
       <TemplateList data={PopularSeries} totalpages={totalpages} page={page} category="television" link="popular" pagetype={"Popular TV Shows"}/>
       
    )
    return(
        <div>
        <Search type="tv" placeholder="Search for a tv show"/>
            {
                Popular
            }
        </div>
    )
}

