import { Fragment } from 'react';

import Banner from './Home/Banner';
import '../css/home.css'
import HomePopular from './Home/HomePopular';
import { Link } from 'react-router-dom';
import TVPopular from './Home/TVPopular';

export default function Home(){
    

    return(
        <Fragment>
            <Banner />
            <section>
                <div className="container">
                <div className="flex">
                    <div style={{"flexGrow": "8"}}>
                        <h3 className="pagetype">Popular Movies</h3>
                    </div>
                    <div className="view-popular">
                    <Link to="/movie/popular/1">See all</Link>
                    </div>

                </div>
                <HomePopular/>
                </div>
               
            </section>

            <section>
                <div className="container">
                <div className="flex">
                    <div style={{"flexGrow": "8"}}>
                        <h3 className="pagetype">Popular TV Shows</h3>
                    </div>
                    <div className="view-popular">
                    <Link to="/television/popular/1">See all</Link>
                    </div>

                </div>
                <TVPopular/>
                </div>
               
            </section>
     
        </Fragment>
    )
}
