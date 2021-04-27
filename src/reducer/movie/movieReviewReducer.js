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
           

        case 'CLEAR_MOVIE_REVIEW':
  
                state = {
                    Review:action.payload
                }
             
                return state;
                       
        
    
        default:
            return state;
    }
}