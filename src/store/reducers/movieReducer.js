  
const initState ={LatestMovies:[],PopularMovies:[],MovieDetails:[],MovieCredit:[]};

const movieReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_LATESTMOVIE':
            let LatestMovies = action.payload
            
            state = {
                ...state,
                LatestMovies:LatestMovies
            }
            return state;

        case'FETCH_POPULARMOVIE':
            let PopularMovies = action.payload
            
            state = {
                ...state,
                PopularMovies:PopularMovies
            }
            return state;
         
        case'FETCH_MOVIEDETAILS':
            let MovieDetails = action.payload
            
            state = {
                ...state,
                MovieDetails:MovieDetails
            }
            return state;
        
            case'FETCH_MOVIECREDIT':
            let MovieCredits = action.payload
            
            state = {
                ...state,
              MovieCredit:MovieCredits
            }
            return state;

             
            default:
            return state;
            }
    
}
export default movieReducer;