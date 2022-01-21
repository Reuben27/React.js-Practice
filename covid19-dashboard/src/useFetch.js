import { useState, useEffect } from "react";
import moment from 'moment';

//custom hooks in react need to start with 'use'
const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(true);
  
    useEffect(() => {
      fetch(url, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
          "x-rapidapi-key": "844077c581mshd2ad47bfa4bdc2bp1c46eajsn2ad14704d81b"
        }
      })
      .then(response => {
        if(!response.ok){
          throw Error('The data could not be fetched');
        }
        let data = response.json();
        // console.log(data);
        // console.log(response);
        
        data.then(function(result){
          console.log(result)
          let zero = [
            {
              "confirmed": 0,
              "recovered": 0,
              "critical": 0,
              "deaths": 0,
              "lastChange": "2022-01-20T04:03:34+01:00",
              "lastUpdate": "2022-01-20T04:30:03+01:00"
            },
            {
              "confirmed": 236445398,
              "recovered": 274479645,
              "critical": 90009,
              "deaths": 6013234,
              "lastChange": "2022-01-21T04:03:34+01:00",
              "lastUpdate": "2022-01-21T04:30:03+01:00"
          }
          ];
          zero.push(result[0])

          for(let i = 1; i < zero.length; i++ ){
            zero[i]['date'] = moment(zero[i].lastChange).format("MMMM Do YYYY");
          }

          setData(zero); //State Hook wont cause infinte loops here due to the empty dependency [] in the useEffect.
          setIsPending(false);
          setError(null);
        });

      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
      });
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;