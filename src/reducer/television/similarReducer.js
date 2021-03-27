export const initialState = {
    Similar:[]
  
}

export const similarReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_SIMILAR_TELEVISION':
  
            state = {
                Similar:action.payload
            }
         
            return state;
            break;

        case 'CLEAR_SIMILAR_TELEVISION':
  
            state = {
                Similar:action.payload
            }
         
            return state;
            break;    
    
        default:
            break;
    }
}