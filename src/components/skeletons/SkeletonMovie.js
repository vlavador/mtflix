import React, { Fragment } from 'react'
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement'


const SkeletonMovie = ({theme}) =>{
    const themeClass = theme || 'light';

    let MovieLoad =  ([1,2,3,4,5,6,7,8,9,10].map((n) => 
    <div className={`skeleton-wrapper ${themeClass}`} key={n}>
            <div className="skeleton-article">
                <SkeletonElement type="movie-image"/>
                <SkeletonElement type="text"/>
                <SkeletonElement type="text"/>
            </div>
        <Shimmer />
    </div>
    ))

    return(
     <Fragment>
         {MovieLoad}
     </Fragment>
    )
}

export default SkeletonMovie