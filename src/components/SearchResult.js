import { useParams } from "react-router";
import MovieResultList from "./MovieResultList";
import PersonResultList from "./PersonResultList";
import Search from "./Search";

import TVResultList from "./TVResultList";
import PageNotFound from "./PageNotFound"
const SearchResult = () => {
    
    const {type} = useParams()

    const validateLink = () =>{
        if(type === "movie"){
            return  <MovieResultList  />
        }
        if(type === "tv" ){
            return  <TVResultList type={type} />
        }
        if(type === "person"){
            return <PersonResultList type={type} />
        }
       return <PageNotFound />
    }

    return ( 

        <section>
            <Search type={type}/>
            <div className="container ">
            
              {
                  validateLink()
              } 
        
             

            </div>
        </section>
     );
}
 
export default SearchResult;