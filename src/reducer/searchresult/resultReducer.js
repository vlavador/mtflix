  
export const initialState ={
    Series:[],
    movie:[],
    Person:[],
    page:0,
    total_pages:1,
    total_results:1
}
export const resultReducer = (state = initialState,action) =>{
    switch (action.type){
        case'FETCH_MOVIE_RESULTS':
        
       
            state = {
                ...state,
               movie:action.payload.results,
               page:action.payload.page,
               total_pages:action.payload.total_pages,
               total_results:action.payload.total_results
            }
      
            return state;

        case'CLEAR_MOVIE_RESULTS':
        
          
            state = {
                ...state,
               movie:action.payload,
               page:0,
               total_pages:1,
               total_results:1                    
            }
            return state;

            


            case'FETCH_TV_RESULTS':
        

            state = {
                ...state,
                Series:action.payload.results,
               page:action.payload.page,
               total_pages:action.payload.total_pages,
               total_results:action.payload.total_results
            }
      
            return state;

            case'CLEAR_TV_RESULTS':
        
            
            state = {
                ...state,
                Series:action.payload,
               page:0,
            total_pages:1,
            total_results:1 
            }
            return state;

       

            case'FETCH_PERSON_RESULTS':
        
      
            state = {
                ...state,
                Person:action.payload.results,
               page:action.payload.page,
               total_pages:action.payload.total_pages,
               total_results:action.payload.total_results
            }
      
            return state;

        case'CLEAR_PERSON_RESULTS':
        
            
            state = {
                ...state,
                Person:action.payload,
               page:0,
            total_pages:1,
            total_results:1 
            }
            return state;

       

        
            default:
            return state;
            }

        
         
            


    
}
