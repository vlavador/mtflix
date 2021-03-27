export const initialState = {
    MovieDetails:[]
  
}

export const movieDetailsReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_MOVIEDETAILS':
  
            state = {
                MovieDetails:action.payload
            }
         
            return state;
            break;
        
            case 'FETCH_NULLMOVIEDETAIL':
                state = {
                    MovieDetails:action.payload
                }
             
                return state;
                break;

            case 'CLEAR_MOVIEDETAILS':

                    state = {
                        MovieDetails:action.payload
                    }
                 
                    return state;
                    break;
    
        default:
            break;
    }
}