import React, { Component,Fragment } from 'react'
import {connect} from 'react-redux'
import {getPopularMovies,getOtherPopularMovies} from '../../store/actions/movieAction'
import MovieList from './MovieLists'

class PopularMovies extends Component{
        state = {
            activePage:1
        }
    componentDidMount(){
        this.props.getPopularMovies()
    }
 

    previousPage = () =>{
        this.props.clearmovie()
        this.props.getOtherPopular(this.state.activePage-1)
        let newPage = this.state.activePage-1
        this.setState({
            activePage:newPage
        })
    }
   nextPage = () =>{
    this.props.clearmovie()
       this.props.getOtherPopular(this.state.activePage+1)
       let newPage = this.state.activePage +1
       this.setState({
           activePage:newPage
       })
       window.scrollTo(0,0);
   }


    getCreated = (date) => {
        let dates = new Date(date)
        const mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

        
        
        return `${mlist[dates.getMonth()]} ${dates.getUTCDate()}, ${dates.getUTCFullYear()}`
        
    }
    render(){
        console.log(this.props.popularMovies)
      
        let {popularMovies} = this.props;
    
        let PopularMovies = popularMovies.length === 0 ? 
            (<div>wala</div>):
            (<MovieList movieList = {popularMovies.results}  Created={this.getCreated}/>);
        return(
            <section className="container">
                <div>
                <div>
                    <h2>Popular Movies</h2>
                   
                </div>

                    <div> <span className="pagedesign">Page:</span> <span>{this.state.activePage}/{this.props.totalpage}</span></div>
                </div>
              
                <ul className="popular-movie grid ">
                {PopularMovies}
                </ul>
                <div className="container text-right padding-zero">
                {
                this.props.totalpage === null ? (null):(
                    <Fragment>                        {    this.state.activePage === 1 ? (null):
                                        (
                                        <span onClick={this.previousPage} className="btn-design">Previous</span>
                                        )

                        }
                   {
                    this.state.activePage === this.props.totalpage ? (null):
                                (
                                    <span onClick={this.nextPage} className="btn-design">Next</span>
                                )   
                   }
                                                                        
                             
                   </Fragment>

                  

                         
                )
              }

                </div>
          
              <h1>dasdsadsa</h1>
            </section>
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
        getPopularMovies: () => {dispatch(getPopularMovies())},
        getOtherPopular: (page) => {dispatch(getOtherPopularMovies(page))},
        clearmovie: () => { dispatch({type:'CLEAR_POPULAR_QMOVIE',payload:[]})}
    }

}

export default connect(mapStatetoProps,mapDispatchtoProps)(PopularMovies);