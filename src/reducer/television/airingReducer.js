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
            
        
        case 'FETCH_ERROR_AIRING_TELEVISION':
          
            state = {
                ...state,
                 error:true,
                 AiringSeries:action.payload
              
               
            }
            return state;
            

        case 'CLEAR_AIRING_TELEVISION':
           
                state = {
                    ...state,
                    AiringSeries:action.payload
                    
                    
                }
                return state;
                
    
        default:
            return state;
    }
}