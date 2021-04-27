import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import nomoviebg from '../../assets/nomoviebg.svg'
import test from '../../assets/TEST.png'
const TelevisionLists = ({televisionList,Created}) => {


    const TelevisionTrend = televisionList === undefined ? (null) :(
        televisionList.map(television => {
            return( 
                <li key={television.id}>
                    <div className="movie-img bg-color">
                        {
                            television.poster_path === null ?
                            (<Link  to={'/tv/' +television.id}><img src={test} alt={television.original_name}/></Link>) :
                            (<Link  to={'/tv/' +television.id}><img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + television.poster_path}  alt={television.original_name} /></Link>)
                        }
                    </div>
                    <div className="movie-tv-content">
                        <Link to={'/tv/' +television.id}>{television.original_name}</Link>
                        <p>{Created(television.first_air_date)}</p>
                    </div>
                  
                </li>
            )
            })
    ) 

        
    return (
        <Fragment>
            {TelevisionTrend}
        </Fragment>
    )
}

export default TelevisionLists