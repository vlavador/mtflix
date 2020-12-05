import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
const TvCredit = ({filterTv}) => {
    let filteredTv = filterTv === null ?(null) :(filterTv.map((tv) => { 
        return(<li key={tv.id}><Link to={`/tv/${tv.id}`}>{tv.original_name}</Link> as <span>{tv.character}</span></li>)
    }))
    return(
        <Fragment>
           {filteredTv}
        </Fragment>
    )
}

export default TvCredit