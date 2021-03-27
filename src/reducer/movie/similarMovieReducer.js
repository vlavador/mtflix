export const initialState = {
    Similar:[]
  
}

export const similarMovieReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_SIMILAR_MOVIE':
  
            state = {
                Similar:action.payload
            }
         
            return state;
            break;

        case 'CLEAR_SIMILAR_MOVIE':
  
                state = {
                    Similar:action.payload
                }
             
                return state;
                break;
            
    
        default:
            break;
    }
}