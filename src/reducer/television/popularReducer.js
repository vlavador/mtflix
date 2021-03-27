export const initialState = {
    PopularSeries:[],
    totalpages:1,
    page:0,
    error:false
}

export const popularReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_POPULAR_TELEVISION':
           
            state = {
                ...state,
                PopularSeries:action.payload.results,
                totalpages:action.payload.total_pages,
                page:action.payload.page
                
            }
            return state;
            break;
        
        case 'FETCH_ERROR_POPULAR_TELEVISION':
            console.log(action.payload)
            state = {
                ...state,
                 error:true,
                PopularSeries:action.payload
              
               
            }
            return state;
            break;

        case 'CLEAR_POPULAR_TELEVISION':
           
                state = {
                    ...state,
                    PopularSeries:action.payload
                    
                    
                }
                return state;
                break;
    
        default:
            break;
    }
}