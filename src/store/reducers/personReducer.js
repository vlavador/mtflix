  
const initState ={PersonalDetails:[],CombinedCredits:[],ExtenalLink:[]};

const personReducer = (state = initState,action) =>{
    switch (action.type){
        case'FETCH_PERSONAL_DETAILS':
            let PersonalDetails = action.payload
            
            state = {
                ...state,
                PersonalDetails
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

             
            default:
            return state;
            }
    
}
export default personReducer;