import axios from 'axios';
import {api_key} from  '../../Keys'

export const getPersonalDetails = (id) =>{   
    return(dispatch) => {
        axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${api_key}`).then((res) => dispatch({type:'FETCH_PERSONAL_DETAILS',payload:res.data})).catch(err => console.log(err)) 
    }
    
}



export const getCombineCredits = (id) =>{   
    return(dispatch) => {
        axios.get(`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${api_key}`).then((res) => dispatch({type:'FETCH_COMBINED_CREDITS',payload:res.data})).catch(err => console.log(err)) 
    }
    
}

export const getExternalLink = (id) =>{   
    return(dispatch) => {
        axios.get(`https://api.themoviedb.org/3/person/${id}/external_ids?api_key=${api_key}`).then((res) => dispatch({type:'FETCH_EXTERNAL_LINK',payload:res.data})).catch(err => console.log(err)) 
    }
    
}