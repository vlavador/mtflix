export const reviewState = {
    Review:[]
  
}

export const televisionReviewReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_TELEVISION_REVIEW':
  
            state = {
                Review:action.payload.results
            }
         
            return state;
            break;
        case 'CLEAR_TELEVISION_REVIEW':
  
                state = {
                    Review:action.payload
                }
             
                return state;
                break;
        
        
    
        default:
            break;
    }
}