export const initialState = {
    OnAirSeries:[],
    totalpages:1,
    page:0,
    error:false
}

export const onAirReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_ON_AIR_TELEVISION':
           
            state = {
                ...state,
                OnAirSeries:action.payload.results,
                totalpages:action.payload.total_pages,
                page:action.payload.page
                
            }
            return state;
            
        
        case 'FETCH_ERROR_ON_AIR_TELEVISION':
          
            state = {
                ...state,
                 error:true,
                 OnAirSeries:action.payload
              
               
            }
            return state;
            

        case 'CLEAR_ON_AIR_TELEVISION':
           
                state = {
                    ...state,
                    OnAirSeries:action.payload
                    
                    
                }
                return state;
                
    
        default:
            return state;
    }
}