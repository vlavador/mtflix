render(){
    let {upcoming} = this.props
    let {onAir} = this.props

    let upComing = upcoming.length === 0 ? 
        (null) :
        (<Fragment>
            {
                upcoming.results.slice(0,13).map(movie => 

                
                    <li as={Link} to={'/movie/' +movie.id} >

                            <div>
                    <Link to={`/movie/${movie.id}`} > 
                        <img src={'https://image.tmdb.org/t/p/w250_and_h141_face'+movie.poster_path}/>
                    </Link>
                        <div>
                            <p>
                            <Link to={`/movie/${movie.id}`} className="link" >
                            {movie.original_title}
                            </Link>
                            </p>
                          
                        </div>
                    </div>
                       
                    </li>
                ) 
            }
        </Fragment>)



    let Airing = onAir.length === 0 ? 
    (null) :
    (<Fragment>
        {
            onAir.results.slice(0,13).map((tv,index) => 

            
                <li className="" key={index}>  
     <div>
        <Link to={`/tv/${tv.id}`} >                 
            <img src={'https://image.tmdb.org/t/p/w250_and_h141_face'+tv.poster_path}/>
        </Link>

         <div>
             <p>  <Link to={`/tv/${tv.id}`} className="link"> {tv.original_name}</Link></p>
          
         </div>
     </div>
 </li>     
            ) 
        }
    </Fragment>)
    return(
        <section>
            <div className="container">
                <h2>Upcoming Movies</h2>
                <ul className="upcoming-home grid">
                {
                    upComing
                }
                </ul>
              
            </div>
            <div className="container">
                <h2>Airing TV Series</h2>
                <ul className="onair-home grid">
                    {
                        Airing
                    }
                </ul>
            </div>

        </section>
    )
