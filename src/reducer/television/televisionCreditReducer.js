export const creditState = {
    TelevisionCredit:[]
  
}

export const televisionCreditReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_TELEVISION_CREDIT':
  
            state = {
                TelevisionCredit:action.payload
            }
         
            return state;
            break;

        case 'CLEAR_TELEVISION_CREDIT':
  
                state = {
                    TelevisionCredit:action.payload
                }
             
                return state;
                break;
        
    
        default:
            break;
    }
}