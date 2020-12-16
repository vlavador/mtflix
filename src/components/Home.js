import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return(
        <Fragment>
            This is the Home Component
            <Link to={`/movie/popular/1`}>popular</Link>
        </Fragment>
    )
}
export default Home