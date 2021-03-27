import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
const Footer = () =>{
    return(
        <section className="footer-padding section-bg">
            <div className="container grid footer-grid">
                <div>  
                    <h2>Movies</h2>
                    <ul>
                        <li><Link to={`/movie/upcoming/1`}>Upcoming</Link></li>
                        <li ><Link to={`/movie/toprated/1`} >Top Rated</Link></li>
                        <li><Link to={`/movie/nowplaying/1`}>Now Playing</Link></li>
                        <li><Link to={`/movie/popular/1`}>Popular</Link></li>
                    </ul>
                </div>
                <div>
                <h2>Television</h2>
                    <ul>
                        <li><Link to={`/television/onair/1`}>On Air</Link></li>
                        <li><Link to={`/television/airing/1`}>Airing</Link></li>
                        <li><Link to={`/television/toprated/1`}>Top Rated</Link></li>
                        <li><Link to={`/television/popular/1`}>Popular</Link></li>
                    </ul>
                </div>
                <div>
                    <h2>About The website</h2>
                    <p>Hello Viewers, Here's my sample portfolio. The MTFinder helps you to find the latest,upcoming, now playing, top rated movies and onAir, Airing, popular and top rated Tv Shows. The technology I use creating this website are html,css,javascript,redux and the framework I use are react.js and reactbootstrap.</p>
                </div>

            </div>
        </section>
    )
}

export default Footer;