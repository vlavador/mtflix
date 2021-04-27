import { Fragment,useEffect, useReducer, useState } from "react";
import {resultReducer,initialState} from '../reducer/searchresult/resultReducer'
import { useParams } from "react-router";
import {api_key} from  '../Keys'
import Loader from 'react-loader-spinner'
import NoImage from '../assets/nobg-94w-141h.png'
import { Link } from "react-router-dom";
import {nextPage,previousPage} from './functions'

const MovieResultList = () => {
    const [ID, setID] = useState(1);
    const {name,type} = useParams()
    const [{movie,page,total_pages,total_results},dispatch] = useReducer(resultReducer,initialState)

    useEffect(() => {
        const abortCont = new AbortController();
        setID(1)
        dispatch({type:'CLEAR_MOVIE_RESULTS',payload:[]})
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${name}`,{signal:abortCont.signal})
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_MOVIE_RESULTS',payload:data}))
        .catch(err => console.log(err))
        window.scrollTo(0, 0)
        console.log("cat")
        return () => abortCont.abort();
    

    

}, [name])
   


    const movielist = movie.length === 0 ? null : (
        movie.map(movie => {
            return(
                <li key={movie.id}>
                    <div className="result-design">
                   
                    {
                        movie.poster_path === null ?
                            ( <Link  to={'/movie/' +movie.id}> <img src={NoImage} className="img-responsive" alt={movie.title} /></Link>) :
                            (  <Link to={'/movie/' +movie.id}><img src={"https://image.tmdb.org/t/p/w94_and_h141_bestv2" + movie.poster_path}  alt={movie.title}  className="img-responsive"/></Link>)
                        }
                    
                    <div className="result-content">
                    <p> <Link to={'/movie/' +movie.id}>{movie.title}</Link></p>
                    <span>{movie.overview}</span>
                    </div>
                   
                    </div>
                    <div>
                   
                    </div>

                   
                </li>
            )
        })
    ) 

    return (
        <Fragment>
        {
            total_results === 0 ? (
                <div className="container height">
                    <h2>There are no movies that matched your query.</h2>
                </div> ) :
                (
                    movie.length === 0 ? (
        <div className="spinner-design container">
            <Loader type="Puff" color="#00BFFF" height={150} width={200} />
        </div>
    ) : (
        <Fragment>
        <div className="flex" style={{"alignItems:": "center","margin":"10px 0px"}}>
            <div style={{"flexGrow": "8"}}>
            <h4 style={{"margin":"0px"}}>{`We found ${total_results} results.`}</h4>
            </div>
            <div  style={{"margin":"5px 0px"}}>
            {
                total_pages === null ? (null) : (
                    <Fragment>
                    <span className="pagedesign">Page:</span>
                    <span>{page}/{total_pages}</span>
                    </Fragment>

                )
            }
               
            </div>
        </div>
            <ul className="grid search-grid">
              {
                movielist
            }
            </ul>
            <div className="container text-right padding-zero">
        {
        total_pages === null ? 
        (null):(
            <Fragment>
                {parseInt(page) === 1 ? 
                    (null):
                    (<span onClick={() => previousPage(page,dispatch,name,type)} className="search-btn">Previous</span>)
                }
                {parseInt(page) === total_pages ? 
                    (null):( <span onClick={() => nextPage(page,dispatch,name,type)} className="search-btn">Next</span>)   
                }           
           </Fragment>
        )
        }
        </div>
        </Fragment>

    )


                
            )
        }

  


     
      
        </Fragment>
        
     
    );
}
 
export default MovieResultList;