import { useState, useEffect } from "react";

//custom hooks in react need to start with 'use'
const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(true);
  
    useEffect(() => {
      fetch(url)
        .then((res) => {
          if(!res.ok){
            throw Error('The data could not be fetched');
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setData(data); //State Hook wont cause infinte loops here due to the empty dependency [] in the useEffect.
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          // console.log(err.message);
          setError(err.message);
          setIsPending(false);
        });
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;