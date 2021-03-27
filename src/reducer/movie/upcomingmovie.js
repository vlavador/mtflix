export const initialState = {
    UpcomingMovies:[],
    totalpages:1,
    page:0,
    error:false
}

export const upcomingReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_UPCOMING_MOVIE':
         
            state = {
                ...state,
                UpcomingMovies:action.payload.results,
                totalpages:action.payload.total_pages,
                page:action.payload.page
            }
            return state;
            break;
        
        case 'FETCH_ERROR_UPCOMING_MOVIE':
            state = {
                ...state,
                 error:true,
                 UpcomingMovies:action.payload   
            }
            return state;
            break;
        
        case 'CLEAR_UPCOMING_MOVIE':
            
            state = {
                ...state,
                UpcomingMovies:action.payload
                
                
            }
            return state;
                break;   
        default:
            break;
    }
}