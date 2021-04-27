export const creditState = {
    MovieCredit:[]
  
}

export const movieCreditReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_MOVIECREDIT':
  
            state = {
                MovieCredit:action.payload
            }
         
            return state;
            

        case 'CLEAR_MOVIECREDIT':
  
                state = {
                    MovieCredit:action.payload
                }
             
                return state;
                
        
    
        default:
                return state;
    }
}