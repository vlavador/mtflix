import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {getMovieDetails,getMovieCredit, getMovieReview, getSimilarMovie, getMovieRecommendation} from '../../store/actions/movieAction'
import MovieCast from './MovieCast'
import MovieCrew from './MovieCrew'
import MovieRecommendation from './MovieRecommendation'
import MovieReview from './MovieReview'
import OtherDetails from './OtherDetails'
import SimilarMovies from './SimilarMovies'
import SkeletonArticle from '../skeletons/SkelotonArticle'

class MovieDetails extends Component{
    componentDidMount(){
        this.props.clearmoviedetails()
        this.props.getMovieDetails(this.props.match.params.id)
        this.props.getMovieCredit(this.props.match.params.id)
        this.props.getMovieReview(this.props.match.params.id)
        this.props.getSimilarMovie(this.props.match.params.id)
        this.props.getMovieRecommendation(this.props.match.params.id)

        
    
    }
    render(){

    
        console.log(this.props.MovieReview)
        let moviedetails = this.props.MovieDetails === null ?
         (<div>
               <h2>Oops!—We can't find the page you're looking for.</h2>
                <p>You tried to request a page that doesn't seem to exist. If you believe this to be in error, let us know on the forums.</p>
         </div>) : 
           (
            this.props.MovieDetails.length === 0 ? (
                <SkeletonArticle />
            ) : (
                <Fragment>
                <section className='Movie-Background' style={{backgroundImage:`radial-gradient(circle at 20% 50%, rgba(11.76%, 18.43%, 23.53%, 0.98) 0%, rgba(18.82%, 25.49%, 30.59%, 0.88) 100%),url(https://image.tmdb.org/t/p/w1400_and_h450_face/${this.props.MovieDetails.backdrop_path})`}}>
                    <div className="container grid moviedetails">
                        <div className="poster">
                        <img src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + this.props.MovieDetails.poster_path}  alt="Lights"  />
                        </div>
                        <div className="movie-padding">
                            <div className="moviedetailscolor">
                            <h2 className="moviedetailtitle">{this.props.MovieDetails.title}</h2>
                            </div>
                            <div className="overview-info">
                                <h3 dir="auto">Overview</h3>
                                <p>{this.props.MovieDetails.overview}</p>
                            </div>
                            <MovieCrew Crew = {this.props.MovieCredit.crew}/> 
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container grid movie-content">
                        <div className="">
                           <div className=""> <MovieCast Cast= {this.props.MovieCredit.cast} id={this.props.match.params.id}/></div>
                      <div className="movie-review"><MovieReview Review = {this.props.MovieReview} id={this.props.match.params.id} /></div>  
                        </div>
                 
                       <div className=""><OtherDetails OtherDetails = {this.props.MovieDetails}/></div>
                    </div>  
                </section>
              
                <section className="container custom-padding">
                    <MovieRecommendation recommendation = {this.props.Recommendation}/>
                </section>
                <section className="container custom-padding">
                    <SimilarMovies  similar={this.props.SimilarMovie}/>
                </section>

            </Fragment>
            )
           )  
        return(
            <Fragment>
                {moviedetails}
            </Fragment>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        MovieDetails:state.movie.MovieDetails,
        MovieCredit:state.movie.MovieCredit,
        MovieReview:state.movie.MovieReview,
        Recommendation:state.movie.MovieRecommendation,
        SimilarMovie:state.movie.SimilarMovie
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        getMovieDetails : (id) => {dispatch(getMovieDetails(id))},
        getMovieCredit : (id) => {dispatch(getMovieCredit(id))},
        getMovieReview: (id) => {dispatch(getMovieReview(id))},
        getSimilarMovie: (id) => {dispatch(getSimilarMovie(id))},
        getMovieRecommendation : (id) => {dispatch(getMovieRecommendation(id))},
        clearmoviedetails: () => { dispatch({type:'CLEAR_MOVIEDETAILS',payload:[]})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails);