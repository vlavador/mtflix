import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
const TvCredit = ({filterTv,id}) => {
    let filteredTv = filterTv === null ?(null) :(filterTv.slice(0,9).map((tv) => { 
        return(<li key={tv.id}><Link to={`/tv/${tv.id}`}>{tv.original_name}</Link> as <span>{tv.character}</span></li>)
    }))
    return(
        <Fragment>
            <ul className="pcredit"> 
           {filteredTv}
         
           </ul>
           {
                filterTv === null ? (null) : (
                    filterTv.length < 10 ? null :       
                     <a href={`https://www.themoviedb.org/person/${id}`}> View All Cast </a>
             
                    )
            }
        </Fragment>
    )
}

export default TvCredit