export const reviewState = {
    Review:[]
  
}

export const movieReviewReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_MOVIE_REVIEW':
  
            state = {
                Review:action.payload
            }
         
            return state;
            break;

        case 'CLEAR_MOVIE_REVIEW':
  
                state = {
                    Review:action.payload
                }
             
                return state;
                break;        
        
    
        default:
            break;
    }
}