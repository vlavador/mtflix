export const initialState = {
    PopularMovies:[],
    totalpages:1,
    page:0,
    error:false
}
export const popularReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_POPULAR_MOVIE':
           
            state = {
                ...state,
                PopularMovies:action.payload.results,
                totalpages:action.payload.total_pages,
                page:action.payload.page
            }
            return state;
         
        
            case 'FETCH_ERROR_POPULAR_MOVIE':
            
                state = {
                    ...state,
                     error:true,
                    PopularMovies:action.payload     
                }
                return state;
             
    
            case 'CLEAR_POPULAR_MOVIE':
                    state = {
                        ...state,
                        PopularMovies:action.payload
                    }
                    return state;
                 

            
        
            default:
                return state;
        }
    }
