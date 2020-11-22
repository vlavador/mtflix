import axios from 'axios';
import {api_key} from  '../../Keys'

export const getLatestMovie = () =>{   
    return(dispatch) => {
        axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${api_key}`).then((res) => dispatch({type:'FETCH_LATESTMOVIE',payload:res.data})).catch(err => console.log(err)) 
    }
    
}

export const getPopularMovies = () =>{   
    return(dispatch) => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`).then((res) => dispatch({type:'FETCH_POPULARMOVIE',payload:res.data})).catch(err => console.log(err)) 
    }
    
}
/**Get the Movie Details */
export const getMovieDetails = (id) =>{   
    return(dispatch) => {
        console.log('taes')
        let movieid = id
        axios.get("https://api.themoviedb.org/3/movie/"+movieid+"?api_key="+api_key).then((res) => dispatch({type:'FETCH_MOVIEDETAILS',payload:res.data})).catch(err => dispatch({type:'FETCH_NULLMOVIEDETAIL',payload:null})) 
    }
    
}
/**Get the Movie Crew*/
export const getMovieCredit = (id) =>{   
    return(dispatch) => {

   
        let movieid = id
        axios.get("https://api.themoviedb.org/3/movie/"+movieid+"/credits?api_key="+api_key).then(res => dispatch({type:'FETCH_MOVIECREDIT',payload:res.data})).catch(err => console.log(err))

    }
}