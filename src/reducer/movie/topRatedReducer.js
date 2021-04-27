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
            
        
        case 'FETCH_ERROR_TOPRATED_MOVIE':
        
            state = {
                ...state,
                 error:true,
                TopRatedMovies:action.payload
              
               
            }
            return state;
            

        case 'CLEAR_TOPRATED_MOVIE':
           
                state = {
                    ...state,
                    TopRatedMovies:action.payload
                    
                    
                }
                return state;
                
    
        default:
            return state;
    }
}