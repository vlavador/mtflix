export const initialState = {
    Recommendation:[]
  
}

export const recommendationReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_RECOMMENDATION_TELEVSION':
  
            state = {
                Recommendation:action.payload
            }
         
            return state;
            

        case 'CLEAR_RECOMMENDATION_TELEVSION':
  
                state = {
                    Recommendation:action.payload
                }
             
                return state;
                
            
        
    
        default:
            return state;
    }
}