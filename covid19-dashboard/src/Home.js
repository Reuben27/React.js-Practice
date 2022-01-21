import React  from "react";
import useFetch from "./useFetch";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const {data: covidData, isPending, error} = useFetch("https://covid-19-data.p.rapidapi.com/totals?format=json");

  return (
    <div className = "container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      <h3>Covid Dashboard</h3>
      <br></br>
      <div classname = "covid-data"> {covidData && 
          <LineChart
            width={800}
            height={300}
            data={covidData}
            margin={{ top: 20, right: 30, left: 60, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Line type="monotone" dataKey="confirmed" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />
            <Line type="monotone" dataKey="critical" stroke="blue" />
            <Line type="monotone" dataKey="deaths" stroke="red" />
          </LineChart>}
      </div>
    </div>
  );
}
 
export default Home;