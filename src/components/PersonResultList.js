import { Fragment,useEffect, useReducer, useState } from "react";
import {resultReducer,initialState} from '../reducer/searchresult/resultReducer'
import { useParams } from "react-router";
import {api_key} from  '../Keys'
import Loader from 'react-loader-spinner'

import {Link} from 'react-router-dom'

import test from '../assets/TEST.png'
import {nextPage,previousPage} from './functions'
const PersonResultList = () => {
    const [ID, setID] = useState(1);
    const {name,type} = useParams()
    const [{Person,page,total_pages,total_results},dispatch] = useReducer(resultReducer,initialState)

    useEffect(() => {
      
        setID(1)
        dispatch({type:'CLEAR_PERSON_RESULTS',payload:[]})
        fetch(`https://api.themoviedb.org/3/search/person?api_key=${api_key}&query=${name}`)
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_PERSON_RESULTS',payload:data}))
        .catch(err => console.log(err))
        window.scrollTo(0, 0)
    

    

}, [name])





  const personlist = Person.length === 0 ? null : (
    Person.map(person => {
        return(
            <li key={person.id} className="search-li">

            <div className="search-person bg-color">
                    {
                    person.profile_path === null ?
                        (<Link to={'/person/' +person.id}><img src={test} className="img-responsive" alt={person.name} /></Link>) :
                        (  <Link to={'/person/' +person.id}><img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${person.profile_path}`}  alt={person.name}  /></Link>)
                    }
                    </div>
                    <div className="search-person-content">
                        <Link to={'/person/' +person.id}>{person.name}</Link>
                        <p >{person.known_for_department}</p>
                    </div>
                    <div className="known-list">
                    {
                        person.known_for.length === 0 ? null :
                        (
                            <Fragment>
                            <p>Known for:</p>
                        <ul className="known-design">{
                            person.known_for.map((p,index) => 
                            {
                                return p.media_type == "movie" ? (  <li key={index}><Link to={'/movie/' +p.id}>{p.title}</Link></li>) : (  <li key={index}><Link to={'/tv/' +p.id}>{p.original_name}</Link></li>)
                            }
                            
                            )
                        }
                        </ul>
                            </Fragment>

                        )
                    }
                       
                             
                  
                    </div>
                <div className="result-design">

              
               
               
                </div>
                <div>
               
                </div>

               
            </li>
        )
    })
) 

return(
    <Fragment>
    {
        total_results === 0 ? (
        <div className="container height">
                    <h2>There are no people that matched your query.</h2>
                </div>
    ) :(
        Person.length === 0 ? (
            <div className="spinner-design container">
                <Loader type="Puff" color="#00BFFF" height={150} width={200} />
            </div>
        ) : (
            <Fragment>
            <div className="flex" style={{"alignItems:": "center","margin":"10px 0px"}}>
                <div style={{"flexGrow": "8"}}>
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
                <ul className="grid searh-person-grid">
                  {
                   personlist
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
)
}
 
export default PersonResultList;