import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getMovieReview,getMovieDetails} from '../../store/actions/movieAction'
import nullCast from  '../../assets/null-cast.svg'
import OtherDetails from './OtherDetails'

class AllReview extends Component{
    state = {
        split:[]
    }
    
    componentDidMount(){
        this.props.getMovieDetails(this.props.match.params.id)
        this.props.getMovieReview(this.props.match.params.id)
    }
    addSpace = (data) =>{
        let newcode = data.split('\n\r\n').map((code) => <p>{code}</p>);
  
        return [newcode[0]]
    }
    getCreated = (date) => {
        let dates = new Date(date)
        const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

        
        
        return `${mlist[dates.getMonth()]} ${dates.getUTCDate()}, ${dates.getUTCFullYear()}`
        
    }
    render(){
        console.log(this.props.MovieReview)
        let allReview = this.props.MovieReview.length === 0 ? 
        (null) : 
        
        (this.props.MovieReview.slice(0,9).map((review) =>
            {return(
            <li className="card">
                <div>
                <div className="review-info">
                <h2>Review by {review.author} <span>{review.author_details.rating}</span></h2>
                <p>Written by {review.author_details.name} on {this.getCreated(review.created_at)}</p>
                </div>
                    <div className="card-body">{this.addSpace(review.content)}</div>
                </div>
                <div className="text-center">
                    <a href={`https://www.themoviedb.org/review/${review.id}`}>View Review</a>
                </div>
            </li>
            )})) 

  
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
                    <div className="container">
                    <div className="grid review-grid">
                        <div >
                        <div>
                        <span className="view-all-left">Reviews:</span>
                          <span className="view-all-right"><a href={`https://www.themoviedb.org/movie/${this.props.MovieDetails.id}/reviews`}> View All Review</a></span>

                        </div>
                       
                            <div><ul>
                                {allReview}
                            </ul></div>
                            
                        </div>
                        <div>
                            <OtherDetails OtherDetails = {this.props.MovieDetails} />
                        </div>
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
        MovieReview:state.movie.MovieReview,
      
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        getMovieDetails : (id) => {dispatch(getMovieDetails(id))},
        getMovieReview: (id) => {dispatch(getMovieReview(id))} 
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AllReview)