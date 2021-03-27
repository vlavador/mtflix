  
export const initialState ={
    PersonalDetails:[],
    CombinedCredits:[],
    ExtenalLink:[]};

export const personReducer = (state = initialState,action) =>{
    switch (action.type){
        case'FETCH_PERSONAL_DETAILS':
            let PersonalDetails = action.payload
            
            state = {
                ...state,
                PersonalDetails
            }
            return state;

        case'FETCH_ERROR_PERSON':
            let data = action.payload
            
            state = {
                ...state,
                PersonalDetails:data
            }
            return state;

        case'FETCH_COMBINED_CREDITS':
            let CombinedCredit = action.payload
            
            state = {
                ...state,
                CombinedCredits:CombinedCredit
            }
            return state;

        case'FETCH_EXTERNAL_LINK':
            let ExtenalLink = action.payload
            
            state = {
                ...state,
                ExtenalLink
            }
            return state;


        case'CLEAR_PERSON_DETAILS':
             let empty = action.payload
             
             state = {
                 ...state,
                 PersonalDetails:empty,
                 CombinedCredits:empty,
                 ExtenalLink:empty
              }
              return state

             
            default:
            return state;
            }
    
}
