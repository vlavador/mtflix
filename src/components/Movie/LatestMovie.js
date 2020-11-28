import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getLatestMovie} from '../../store/actions/movieAction'

class LatestMovie extends Component{
    componentDidMount(){
        this.props.getlatestmovie();
    }
    render(){
   
        return(
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{

    return{
        latestmovie:state.movie.LatestMovies
       
      
    }
}
const mapDispatchToProps = (dispatch) =>{
return{
    getlatestmovie: () => { dispatch(getLatestMovie())}
}
}


export default connect (mapStateToProps,mapDispatchToProps)(LatestMovie)