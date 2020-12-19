import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {getPopularMovies,getOtherPopularMovies} from '../../store/actions/movieAction'
import MovieList from './MovieLists'
import SkeletonMovie from '../skeletons/SkeletonMovie'
import PageNotFound from './PageNotFound'

class PopularMovies extends Component{
      
    componentDidMount(){

        this.props.clearmovie()  
        this.props.getPopularMovies(this.props.match.params.id)

    }
    
    previousPage = () =>{
        this.props.clearmovie()
       
        this.props.getPopularMovies(parseInt(this.props.match.params.id)-1)
        window.scrollTo(0, 0)
         
       }
      nextPage = () =>{
        this.props.clearmovie()
        this.props.getPopularMovies(parseInt(this.props.match.params.id)+1)
        window.scrollTo(0, 0)
       
      }

 

    getCreated = (date) => {
        let dates = new Date(date)
        const mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

        
        
        return `${mlist[dates.getMonth()]} ${dates.getUTCDate()}, ${dates.getUTCFullYear()}`
        
    }
    render(){
        console.log(this.props.totalpage);
        console.log(this.props.match.params.id)
        let {popularMovies} = this.props;


        let PopularMovie = this.props.popularMovies === null ? (<PageNotFound />) : (
           
            <section className="container">
            <div className="flex" style={{"alignItems:": "center"}}>
                <div style={{"flexGrow": "8"}}>
                    <h2 style={{"margin":"0px"}}>Popular Movies</h2>
                </div>
                <div>
                {
                    this.props.totalpage === null ? (null) : (
                        <Fragment>
                        <span className="pagedesign">Page:</span>
                        <span>{this.props.match.params.id}/{this.props.totalpage}</span>
                        </Fragment>

                    )
                }
                   
                </div>
            </div>
            <ul className="popular-movie grid ">
            {
                popularMovies.length === 0 ? 
            (<SkeletonMovie />):
            (<MovieList movieList = {popularMovies.results}  Created={this.getCreated}/>)
            }
            </ul>
            <div className="container text-right padding-zero">
            {
            this.props.totalpage === null ? 
            (null):(
                <Fragment>
                    {this.props.match.params.id === "1" ? 
                        (null):
                        (<Link to={`/movie/popular/${parseInt(this.props.match.params.id)-1}`} onClick={this.previousPage} className="btn-design">Previous</Link>)
                    }
                    {parseInt(this.props.match.params.id) === this.props.totalpage ? 
                        (null):(<Link to={`/movie/popular/${parseInt(this.props.match.params.id)+1}`} onClick={this.nextPage} className="btn-design">Next</Link>)   
                    }           
               </Fragment>
            )
            }
            </div>
        </section>
        )
        return(
          <Fragment>
            {
                PopularMovie
            }
          </Fragment>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        popularMovies:state.movie.PopularMovies,
        totalpage:state.movie.totalpages
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        getPopularMovies: (id) => {dispatch(getPopularMovies(id))},
        getOtherPopular: (page) => {dispatch(getOtherPopularMovies(page))},
        clearmovie: () => { dispatch({type:'CLEAR_POPULAR_MOVIE',payload:[]})}
    }

}

export default connect(mapStatetoProps,mapDispatchtoProps)(PopularMovies);