import {api_key} from '../Keys'
export const nextPage = (id,dispatch,name,type) =>{
    const pageid = id + 1
    const abortsCont = new AbortController();
        
        dispatch({type:'CLEAR_TV_RESULTS',payload:[]})
        fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${api_key}&query=${name}&page=${pageid}`,{signal:abortsCont.signal})
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_TV_RESULTS',payload:data}))
        .catch(err => console.log(err))
        window.scrollTo(0, 0)
        return () => abortsCont.abort();
  }

export  const previousPage = (id,dispatch,name,type) =>{
    const abortConts = new AbortController();
    const pageid = id - 1
        dispatch({type:'CLEAR_TV_RESULTS',payload:[]})
        fetch(`https://api.themoviedb.org/3/search/${type}?api_key=${api_key}&query=${name}&page=${pageid}`,{signal:abortConts.signal})
        .then(res => res.json())
        .then(data => dispatch({type:'FETCH_TV_RESULTS',payload:data}))
        .catch(err => console.log(err))
        window.scrollTo(0, 0)
        return () => abortConts.abort();
  }

export const getCreated = (date) => {
    let dates = new Date(date)
    const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
    return `${mlist[dates.getMonth()]} ${dates.getUTCDate()}, ${dates.getUTCFullYear()}`
}

export const addSpace = (data) =>{
    let newcode = data.split('\n').map((code,index) => <p key= {index}>{code}</p>);

    return [newcode[0]]
}