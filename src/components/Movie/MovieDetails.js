import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {getMovieDetails,getMovieCredit} from '../../store/actions/movieAction'
import MovieCast from './MovieCast'
import MovieCrew from './MovieCrew'

class MovieDetails extends Component{
    componentDidMount(){
        this.props.getMovieDetails(this.props.match.params.id)
        this.props.getMovieCredit(this.props.match.params.id)
    
    }
    render(){
        console.log(this.props)
        let movieCrew = this.props.MovieCredit.length === 0 ? null: ( <MovieCrew Crew = {this.props.MovieCredit.crew}/> )
        let movieCast = this.props.MovieCredit.length === 0 ? null : <MovieCast Cast= {this.props.MovieCredit.cast} />
        return(
            <Fragment>
                <section className='Movie-Background' style={{backgroundImage:`radial-gradient(circle at 20% 50%, rgba(11.76%, 18.43%, 23.53%, 0.98) 0%, rgba(18.82%, 25.49%, 30.59%, 0.88) 100%),url(https://image.tmdb.org/t/p/w1400_and_h450_face/${this.props.MovieDetails.backdrop_path})`}}>
                    <div className="container flex moviedetails">
                        <div className="poster">
                        <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + this.props.MovieDetails.poster_path}  alt="Lights"  />
                        </div>
                        <div>
                            <div className="moviedetailscolor">
                            <h2 className="moviedetailtitle">{this.props.MovieDetails.title}</h2>
                            </div>
                            <div className="overview-info">
                                <h3 dir="auto">Overview</h3>
                                <p>{this.props.MovieDetails.overview}</p>
                            </div>
                            {movieCrew}
                        </div>
                    </div>
                </section>
                <section >
                    <div className="container grid movie-content">
                    <div className="movie-crews">{movieCast}</div>
                        <div className="movie-facts">dsadsadasdsadsa</div>
                    </div>  
                </section>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        MovieDetails:state.movie.MovieDetails,
        MovieCredit:state.movie.MovieCredit,
        
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        getMovieDetails : (id) => {dispatch(getMovieDetails(id))},
        getMovieCredit : (id) => {dispatch(getMovieCredit(id))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails);