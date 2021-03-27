export const initialState = {
    Recommendation:[]
  
}

export const recommendationReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_RECOMMENDATION_MOVIE':
            console.log(action.payload)
            state = {
                Recommendation:action.payload
            }
         
            return state;
            break;

        case 'CLEAR_RECOMMENDATION_MOVIE':
  
                state = {
                    Recommendation:action.payload
                }
             
                return state;
                break;
            
    
        default:
            break;
    }
}