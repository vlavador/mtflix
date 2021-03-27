import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
const TvCredit = ({filterTv,id}) => {
    let filteredTv = filterTv === null ?(null) :(
        filterTv.length === 0 ?
        (<p>We don't find any TV credits in the database</p>)
        :
        (
            <ul className="pcredit">
                {
                    filterTv.slice(0,9).map((tv,index) => { 
        return(<li key={index}><Link to={`/tv/${tv.id}`}>{tv.original_name}</Link> as <span>{tv.character}</span></li>)
    })
                }
            </ul>
        )
    )
    return(
        <Fragment>
           
           {filteredTv}
         
           
           {
                filterTv === null ? (null) : (
                    filterTv.length < 10 ? null :       
                     <a className="view-credit" href={`https://www.themoviedb.org/person/${id}`}> View All Tv Cast </a>
             
                    )
            }
        </Fragment>
    )
}

export default TvCredit