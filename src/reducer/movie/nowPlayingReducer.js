export const nowPlayingState = {
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
      
        
        case 'FETCH_ERROR_NOW_PLAYING_MOVIE':
           
            state = {
                ...state,
                 error:true,
                 NowPlayingMovies:action.payload
              
               
            }
            return state;
      

        case 'CLEAR_NOW_PLAYING_MOVIE':
           
                state = {
                    ...state,
                    NowPlayingMovies:action.payload
                    
                    
                }
                return state;
          
    
        default:
            return state;
    }
}