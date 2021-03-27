
import { Link,useParams } from 'react-router-dom'
import React, { Component,Fragment,useReducer,useEffect } from 'react'

import PageNotFound from './Movie/PageNotFound'
import SkeletonMovie from './skeletons/SkeletonMovie'

function Template({totalpages,page,error}) {
 if(error){
     return <PageNotFound />
 }
 
 if(page <= totalpages){
     return (
        <section className="container">
            <div className="flex" style={{"alignItems:": "center"}}>
                <div style={{"flexGrow": "8"}}>
                    <h2 style={{"margin":"0px"}}>Popular Movies</h2>
                </div>
           
            </div>
            <ul className="movie-tv grid ">
            {
        
            <SkeletonMovie /> 
              
            }
            </ul>
            <div className="container text-right padding-zero">
           
            </div>
        </section>
    )

     
 } else {
     return <PageNotFound />
 }
}

export default Template



