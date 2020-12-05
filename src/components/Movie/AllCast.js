import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMovieCredit,getMovieDetails} from '../../store/actions/movieAction'
import nullCast from  '../../assets/null-cast.svg'

class AllCast extends Component{
    
    componentDidMount(){
        this.props.getMovieDetails(this.props.match.params.id)
        this.props.getMovieCredit(this.props.match.params.id)
    }
  
    render(){
        console.log(this.props.MovieCredit)
        let AllCast = this.props.MovieCredit.length === 0 ? (null) : (this.props.MovieCredit.cast.map((cast)=>{
            return(
                <li className="" key={cast.id}>  
                <div className="allcastflex">
                <Link to={`/person/${cast.id}`}>
                {
                    cast.profile_path === null ? (
                       <img src={nullCast} className="noImage"/>     
                    ) : (
                        <img src={'https://image.tmdb.org/t/p/w66_and_h66_face'+cast.profile_path}/>
                    )
                }
                </Link>
                
                    <div className="cast-padding allcastpad">
                        <p>{cast.name}</p>
                        <span>{cast.character}</span>
                    </div>
                </div>
            </li>  
            )
        } ))
        let AllCrew = this.props.MovieCredit.length === 0 ? (null) : (this.props.MovieCredit.crew
            .sort((a,b) =>  a.department > b.department ? 1 : -1)
            .map((crew,index)=>{
                return(
                    <li className="" key={index}>  
                    <div className="allcastflex">
                    <Link to={`/person/${crew.id}`}>
                    {
                        crew.profile_path === null ? (
                           <img src={nullCast} className="noImage"/>     
                        ) : (
                            <img src={'https://image.tmdb.org/t/p/w66_and_h66_face'+crew.profile_path}/>
                        )
                    }
                    </Link>
                    
                        <div className="cast-padding allcastpad">
                            <p>{crew.original_name}</p>
                            <span>{crew.known_for_department}</span>
                        </div>
                    </div>
                </li>  
                )
            } )
   )
   console.log(AllCrew)
        return(
            <Fragment>
                <section className="background">
                    <div className="container">
                        <div className="flex align-center">
                        {
                            this.props.MovieDetails.length === 0 ? 
                            (
                                   null
                                    
                            ) : (
                                <Fragment>
                                    <div>
                                        {this.props.MovieDetails.poster_path === null ? 
                                        (
                                            <img src={nullCast} className="noImage"/> 
                                        ) : (
                                            <img src={'https://image.tmdb.org/t/p/w116_and_h174_face'+this.props.MovieDetails.poster_path}/>
                                        )
                                        }
                                    </div>
                                        <div className="allcast-content">
                                            <h2>{this.props.MovieDetails.title}</h2>
                                            <Link to={`/movie/${this.props.match.params.id}`}>← Back to movie</Link>
                                        </div>
                                    </Fragment>
                            )
                        }
                           
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container grid allcastgrid">
                        <div>
                            <div className="count">
                            <h2>Cast</h2>
                            <span className="count">{this.props.MovieCredit.length === 0 ? (null) : (this.props.MovieCredit.cast.length)}</span>
                            </div>
                          
                            <ul>
                                {
                                   AllCast
                                    
                                }
                            </ul>
                        </div>
                        <div>
                        <div className="count">
                            <h2>Crew</h2>
                            <span className="count">{this.props.MovieCredit.length === 0 ? (null) : (this.props.MovieCredit.crew.length)}</span>
                            </div>
                            <ul>
                                {
                                    AllCrew
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        MovieDetails:state.movie.MovieDetails,
        MovieCredit:state.movie.MovieCredit
      
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        getMovieDetails : (id) => {dispatch(getMovieDetails(id))},
        getMovieCredit : (id) => {dispatch(getMovieCredit(id))} 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AllCast)