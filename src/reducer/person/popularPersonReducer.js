export const initialState = {
    PopularPerson:[],
    totalpages:1,
    page:0,
    error:false
}

export const popularPersonReducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_POPULAR_PERSON':
           
            state = {
                ...state,
               PopularPerson:action.payload.results,
                totalpages:action.payload.total_pages,
                page:action.payload.page
                
            }
            return state;
           
        
        case 'FETCH_ERROR_POPULAR_PERSON':
        
            state = {
                ...state,
                 error:true,
               PopularPerson:action.payload
              
               
            }
            return state;
           

        case 'CLEAR_POPULAR_PERSON':
           
                state = {
                    ...state,
                   PopularPerson:action.payload
                    
                    
                }
                return state;
               
    
        default:
            return state;
    }
}