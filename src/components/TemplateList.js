import React,{Fragment} from 'react'
import MovieLists from './Movie/MovieLists';
import TelevisionLists from  './Television/TelevisionLists'
import PersonList from  './Person/PersonList'
import { Link } from 'react-router-dom'
import {getCreated} from './functions'

function TemplateList({data,totalpages,page,category,link,pagetype}) {

   

    return (
        <section className="container">
        <div className="flex" style={{"alignItems:": "center"}}>
            <div style={{"flexGrow": "8"}}>
                <h3  className="pagetype">{pagetype}</h3>
            </div>
            <div  className="pagedesign">
            {
                totalpages === null ? (null) : (
                    <Fragment>
                    <span>Page:</span>
                    <span>{page}/{totalpages}</span>
                    </Fragment>

                )
            }
               
            </div>
        </div>
        <ul className={` ${category === "person" ? "grid searh-person-grid" : "movie-tv grid"}`}>
            {category === "television" ? ( <TelevisionLists televisionList = {data}  Created={getCreated} />) :  null}
            {category === "movie" ? ( <MovieLists  movieList = {data}  Created={getCreated} />) :  null}
              
                {category === "person" ? ( <PersonList Person = {data}  />) :  null}    

     
        
        </ul>
        <div className="container text-right padding-zero">
        {
        totalpages === null ? 
        (null):(
            <Fragment>
                {parseInt(page) === 1 ? 
                    (null):
                    (<Link to={`/${category}/${link}/${parseInt(page)-1}`}  className="btn-design">Previous</Link>)
                }
                {parseInt(page) === totalpages ? 
                    (null):(<Link to={`/${category}/${link}/${parseInt(page)+1}`} className="btn-design">Next</Link>)   
                }           
           </Fragment>
        )
        }
        </div>
    </section>
    )
}

export default TemplateList
