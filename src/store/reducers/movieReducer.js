  
const initState ={
    LatestMovies:[],
    PopularMovies:[],
    MovieDetails:[],
    MovieCredit:[],
    MovieReview:[],
    SimilarMovie:[],
    MovieRecommendation:[],
    MovieCrew:[],
    totalpages:null};

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
            let totalpage = action.payload.total_pages
            
            state = {
                ...state,
                PopularMovies:PopularMovies,
                totalpages:totalpage
            }
            return state;

        case'FETCH_OTHER_POPULAR_MOVIES':
            let  otherpopularmovie = action.payload
            state = {
               ...state,
               PopularMovies:otherpopularmovie
            
            }
            return state;

        case'CLEAR_POPULAR_MOVIE':
            let clear = action.payload
            
            state = {
                ...state,
                PopularMovies:clear
             }
             return state
         
        case'FETCH_MOVIEDETAILS':
            let MovieDetails = action.payload
            
            state = {
                ...state,
                MovieDetails:MovieDetails,
              
            }
            return state;

            case'FETCH_NULLMOVIEDETAIL':
            let NullMovieDetails = action.payload
            
            state = {
                ...state,
                MovieDetails:NullMovieDetails
              
            }
            return state;

            case'CLEAR_MOVIEDETAILS':
            let movieDetails = action.payload
            
            state = {
                ...state,
                MovieDetails:movieDetails
             }
             return state
        
            case'FETCH_MOVIECREDIT':
            let MovieCredits = action.payload
            
            state = {
                ...state,
              MovieCredit:MovieCredits
            }
            return state;

            case'FETCH_SIMILAR_MOVIE':
            let similar= action.payload
            
            state = {
                ...state,
                SimilarMovie:similar
             }
             return state;

             case'FETCH_MOVIE_RECOMMENDATION':
             let recommendation = action.payload
             
             state = {
                 ...state,
                 MovieRecommendation:recommendation
              }
              return state;

              case'FETCH_MOVIE_REVIEW':
              let movieReview = action.payload
              
              state = {
                  ...state,
                  MovieReview:movieReview
               }
             return state;

             
            default:
            return state;
            }
    
}
export default movieReducer;