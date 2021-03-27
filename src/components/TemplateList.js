import React,{Fragment} from 'react'
import MovieLists from './Movie/MovieLists';
import TelevisionLists from  './Television/TelevisionList'
import { Link } from 'react-router-dom'

function TemplateList({data,totalpages,page,category,link}) {

    const getCreated = (date) => {

        let dates = new Date(date)
        const mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];
        return `${mlist[dates.getMonth()]} ${dates.getUTCDate()}, ${dates.getUTCFullYear()}`   
    } 

    return (
        <section className="container">
        <div className="flex" style={{"alignItems:": "center"}}>
            <div style={{"flexGrow": "8"}}>
                <h2 style={{"margin":"0px"}}>Popular Movies</h2>
            </div>
            <div>
            {
                totalpages === null ? (null) : (
                    <Fragment>
                    <span className="pagedesign">Page:</span>
                    <span>{page}/{totalpages}</span>
                    </Fragment>

                )
            }
               
            </div>
        </div>
        <ul className="movie-tv grid ">
        {
            category == "movie" ?
            ( <MovieLists  movieList = {data}  Created={getCreated}/>)
            :
            ( <TelevisionLists  televisionList = {data}  Created={getCreated}/>) 
          
        }
        
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
