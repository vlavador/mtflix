import { useState } from 'react';
import {InputGroup,Button,FormControl} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'


export default function Search({type,placeholder}){
    const history = useHistory();
    const [name,setName] = useState('')
    
    const handleInput = (e) =>{
    setName(e.target.value)
      
    }

    const searchHandler = (e) =>{
       
        e.preventDefault();
        setName('')
     history.push(`/search/${type}/${name}`)
      
    }

    return(
        <section>
            <div className="container">
            <form onSubmit={ searchHandler}>
            <InputGroup className="mb-3 ">
                 <FormControl
                  onChange={handleInput}
                 className="custom-search-input"
         
                placeholder={placeholder}
                aria-label={placeholder}
                aria-describedby="basic-addon2"
                required
               value={name}
                
                />
                <InputGroup.Append>
                <Button variant="outline-secondary custom-search-button"  type="submit">Search</Button>
                </InputGroup.Append>
            </InputGroup>

            </form>
         
            </div>
        </section>
        
    )
}