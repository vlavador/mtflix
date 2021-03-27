import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'
import nomoviebg from '../../assets/nomoviebg.svg'
import test from '../../assets/TEST.png'
const TelevisionList = ({televisionList,Created}) => {


    const TelevisionTrend = televisionList === undefined ? (null) :(
        televisionList.map(television => {
            return( 
                <li key={television.id}>
                    <div className="movie-img bg-color">
                        {
                            television.poster_path === null ?
                            (<img src={test}/>) :
                            (<img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + television.poster_path}  alt="Lights" />)
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

export default TelevisionList