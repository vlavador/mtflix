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

        
            case 'FETCH_NULLMOVIEDETAIL':
                state = {
                    MovieDetails:action.payload
                }
             
                return state;
    

            case 'CLEAR_MOVIEDETAILS':

                    state = {
                        MovieDetails:action.payload
                    }
                 
                    return state;
        
    
        default:
            return state;
    }
}