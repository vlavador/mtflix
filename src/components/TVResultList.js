import { Fragment,useEffect, useReducer, useState } from "react";
import {resultReducer,initialState} from '../reducer/searchresult/resultReducer'
import { useParams } from "react-router";
import {api_key} from  '../Keys'
import Loader from 'react-loader-spinner'
import NoImage from '../assets/nobg-94w-141h.png'
import { Link } from "react-router-dom";
import {nextPage,previousPage} from './functions'
const TVResultList = () => {

    const [ID, setID] = useState(1);
    const {name,type} = useParams()
    const [{Series,page,total_pages,total_results},dispatch] = useReducer(resultReducer,initialState)
    useEffect(() => {
        const abortCont = new AbortController();
        setID(1)
        dispatch({type:'CLEAR_TV_RESULTS',payload:[]})
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${name}&page=1`,{signal:abortCont.signal})
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_TV_RESULTS',payload:data}))
        .catch(err => console.log(err))
        window.scrollTo(0, 0)
       
        return () => abortCont.abort();
    

}, [name])
   



    const serieslist = Series.length === 0 ? null : (
        Series.map(series => {
            return(
                <li key={series.id}>
                    <div className="result-design">
                  
                    {
                        series.poster_path === null ?
                            (<Link to={'/tv/' +series.id}><img src={NoImage} className="img-responsive" alt={series.original_name}/></Link>) :
                            (<Link to={'/tv/' +series.id} > <img src={"https://image.tmdb.org/t/p/w94_and_h141_bestv2" + series.poster_path}  alt={series.original_name}  className="img-responsive"/></Link>)
                        }

                   
                   
                  
                    <div className="result-content">
                    <p ><Link to={'/tv/' +series.id}>{series.original_name}</Link></p>
                    <span>{series.overview}</span>
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
                    <h2>There are no TV Shows that matched your query.</h2>
                </div>
    ) : (
        Series.length === 0 ? (
        <div className="spinner-design container">
            <Loader type="Puff" color="#00BFFF" height={150} width={200} />
        </div>
    ) : (
        <Fragment>
        <div className="flex" style={{"alignItems:": "center","margin":"10px 0px"}}>
            <div style={{"flexGrow": "8"}} >
                <h4 style={{"margin":"0px"}}>{`We found ${total_results} results.`}</h4>
            </div>
            <div style={{"margin":"5px 0px"}}>
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
                serieslist
            }
            </ul>
            <div className="container text-right padding-zero">
        {
        total_pages === null ? 
        (null):(
            <Fragment>
                {parseInt(page) === 1 ? 
                    (null):
                    (<span onClick={() => previousPage(page,dispatch,name,type)} className="btn-design">Previous</span>)
                }
                {parseInt(page) === total_pages ? 
                    (null):( <span onClick={() => nextPage(page,dispatch,name,type)} className="btn-design">Next</span>)   
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
 
export default TVResultList;