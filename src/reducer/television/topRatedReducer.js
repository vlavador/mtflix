export const initialState = {
    TopRatedSeries:[],
    totalpages:1,
    page:0,
    error:false
}

export const topRatedReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_TOP_RATED_TELEVISION':
           
            state = {
                ...state,
                TopRatedSeries:action.payload.results,
                totalpages:action.payload.total_pages,
                page:action.payload.page
                
            }
            return state;
            break;
        
        case 'FETCH_ERROR_TOP_RATED_TELEVISION':
            console.log(action.payload)
            state = {
                ...state,
                 error:true,
                 TopRatedSeries:action.payload
              
               
            }
            return state;
            break;

        case 'CLEAR_TOP_RATED_TELEVISION':
           
                state = {
                    ...state,
                    TopRatedSeries:action.payload
                    
                    
                }
                return state;
                break;
    
        default:
            return state;
            break;
    }
}