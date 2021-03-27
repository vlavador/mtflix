export const initialState = {
    TopRatedMovies:[],
    totalpages:1,
    page:0,
    error:false
}

export const topRatedReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_TOPRATED_MOVIE':
           
            state = {
                ...state,
                TopRatedMovies:action.payload.results,
                totalpages:action.payload.total_pages,
                page:action.payload.page
                
            }
            return state;
            break;
        
        case 'FETCH_ERROR_TOPRATED_MOVIE':
            console.log(action.payload)
            state = {
                ...state,
                 error:true,
                TopRatedMovies:action.payload
              
               
            }
            return state;
            break;

        case 'CLEAR_TOPRATED_MOVIE':
           
                state = {
                    ...state,
                    TopRatedMovies:action.payload
                    
                    
                }
                return state;
                break;
    
        default:
            break;
    }
}