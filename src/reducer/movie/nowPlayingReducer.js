export const initialState = {
    NowPlayingMovies:[],
    totalpages:1,
    page:0,
    error:false
}

export const nowPlayingReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_NOW_PLAYING_MOVIE':
           
            state = {
                ...state,
                NowPlayingMovies:action.payload.results,
                totalpages:action.payload.total_pages,
                page:action.payload.page,
                
            }
            return state;
            break;
        
        case 'FETCH_ERROR_NOW_PLAYING_MOVIE':
            console.log(action.payload)
            state = {
                ...state,
                 error:true,
                 NowPlayingMovies:action.payload
              
               
            }
            return state;
            break;

        case 'CLEAR_NOW_PLAYING_MOVIE':
           
                state = {
                    ...state,
                    NowPlayingMovies:action.payload
                    
                    
                }
                return state;
                break;
    
        default:
            break;
    }
}