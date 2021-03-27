export const initialState = {
    AiringSeries:[],
    totalpages:1,
    page:0,
    error:false
}

export const airingReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_AIRING_TELEVISION':
           
            state = {
                ...state,
                AiringSeries:action.payload.results,
                totalpages:action.payload.total_pages,
                page:action.payload.page
                
            }
            return state;
            break;
        
        case 'FETCH_ERROR_AIRING_TELEVISION':
            console.log(action.payload)
            state = {
                ...state,
                 error:true,
                 AiringSeries:action.payload
              
               
            }
            return state;
            break;

        case 'CLEAR_AIRING_TELEVISION':
           
                state = {
                    ...state,
                    AiringSeries:action.payload
                    
                    
                }
                return state;
                break;
    
        default:
            break;
    }
}