import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getPopularMovies} from '../../store/actions/movieAction'
import MovieList from './MovieLists'

class PopularMovies extends Component{
    componentDidMount(){
        this.props.getPopularMovies()
    }
    render(){
      
        let {popularMovies} = this.props;
    
        let PopularMovies = popularMovies.length === 0 ? 
            (<div>wala</div>):
            (<MovieList movieList = {popularMovies.results}  />);
        return(
            <section className="container">
                <div>
                    <h2>Popular Movies</h2>
                   
                </div>
                <ul className="popular-movie grid ">
                {PopularMovies}
                </ul>
            
            </section>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        popularMovies:state.movie.PopularMovies
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        getPopularMovies: () => {dispatch(getPopularMovies())}
    }

}

export default connect(mapStatetoProps,mapDispatchtoProps)(PopularMovies);