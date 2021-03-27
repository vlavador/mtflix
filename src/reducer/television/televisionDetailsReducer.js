export const initialState = {
    TelevisionDetails:[]
  
}

export const televisionDetailsReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_TELEVISION_DETAILS':
  
            state = {
                TelevisionDetails:action.payload
            }
         
            return state;
            break;
        
            case 'FETCH_NULL_TELEVISION_DETAIL':
                state = {
                    TelevisionDetails:action.payload
                }
             
                return state;
                break;

            case 'CLEAR_TELEVISION_DETAILS':

                    state = {
                        TelevisionDetails:action.payload
                    }
                 
                    return state;
                    break;
    
        default:
            break;
    }
}