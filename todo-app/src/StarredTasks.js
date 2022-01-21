import React from "react";
// import AddTask from './AddTask';
import TaskList from "./TaskList";
import useFetch from "./useFetch";
import 'bootstrap/dist/css/bootstrap.min.css';

const StarredTasks = () => {
  const {data: tasks, isPending, error} = useFetch('http://localhost:8000/tasks');

  return (
    <div className = "container">
      {error && <div>{error}</div>}
      {isPending && <div>Loading....</div>}
      {/*blogs is null intially so the below statement only renders when blogs data has been fetched!*/}
      {/* <AddTask/>
      <br></br> */}
      <h3>Starred Tasks</h3>
      <div></div>
      {tasks && <TaskList tasks = {tasks} type = "starred"/>}
    </div>
  );
}
 
export default StarredTasks;