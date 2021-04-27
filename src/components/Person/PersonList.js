import {Link} from 'react-router-dom'
import {Fragment} from 'react'
import test from '../../assets/TEST.png'

const PersonList = ({Person}) => {

    const Popular = Person === undefined ? (null) :(
        Person.map(person => {
            return(
                <li key={person.id} className="search-li">
    
                <div className="search-person bg-color">
                        {
                        person.profile_path === null ?
                            (<Link to={'/person/' +person.id}><img src={test} className="img-responsive" alt={person.name}/></Link>) :
                            (  <Link to={'/person/' +person.id}><img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${person.profile_path}`}  alt={person.name}  /></Link>)
                        }
                        </div>
                        <div className="search-person-content">
                            <Link to={'/person/' +person.id}>{person.name}</Link>
                            <p  >{person.known_for_department}</p>
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
                                    return p.media_type === "movie" ? (  <li key={index}><Link to={'/movie/' +p.id}>{p.title}</Link></li>) : (  <li key={index}><Link to={'/tv/' +p.id}>{p.original_name}</Link></li>)
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
    return (<Fragment>{Popular}</Fragment>);
}
 
export default PersonList;