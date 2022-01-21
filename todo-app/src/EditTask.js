import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';

const EditTask = () => {
  const {id} = useParams();
  const url = 'http://localhost:8000/tasks/' + id;
  //const {data: task, isDataPending, error} = useFetch('http://localhost:8000/tasks/' + id);

  const [task, setTask] = useState(null);
  const [isDataPending, setIsDataPending] = useState(true);
  const [error, setError] = useState(true);
  const [title, setTitle] = useState('');
  const [assignee, setAssignee] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [isStarred, setIsStarred] = useState(false);
  const [isInProgress, setIsInProgress] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [deadline, setDeadline] = useState(new Date());
  const navigate = useNavigate();

  // useEffect(() => {
  //   if(isDataPending){

  //   } else{
  //     setTitle(task.title);
  //     setIsDone(task.isDone);
  //     setIsStarred(task.isStarred);
  //     setIsInProgress(task.isInProgress);
  //     setDeadline(new Date(task.deadline));
  //   }
  // }, [isDataPending, task])

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
        setTask(data); //State Hook wont cause infinte loops here due to the empty dependency [] in the useEffect.
        setIsDataPending(false);
        setError(null);
        setTitle(data.title);
        setAssignee(data.assignee);
        setIsDone(data.isDone);
        setIsStarred(data.isStarred);
        setIsInProgress(data.isInProgress);
        setDeadline(data.deadline);
      })
      .catch((err) => {
        // console.log(err.message);
        setError(err.message);
        setIsDataPending(false);
      });
  }, [url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, assignee, isDone, isStarred, isInProgress, deadline};
    // console.log(blog);
    fetch('http://localhost:8000/tasks/' + id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      // console.log('New Task Added!');
      //navigate.go(-1);
      navigate('/');
    });
  }
    
  return ( 
    <div>
      {error && <div>{error}</div>}
      {isDataPending && <div>Loading....</div>}
      {task && (<div>
        <h2 className = "create">Edit task</h2>
        <form onSubmit = {handleSubmit}>
          <label className = "createl">Title: </label>
          <input className = "createi" type = "text" required value = {title} 
            onChange = { (e) =>{
                setTitle(e.target.value);
            }}></input>
          <br></br>
          <label className = "createl">Assignee: </label>
          <input className = "createi" type = "text" required value = {assignee} 
            onChange = { (e) =>{
                setAssignee(e.target.value);
            }}></input>
          <br></br>
          <label className = "createl">Mark as Done: </label>
          <select className = "creates" value = {isDone} onChange = {
            (e) => {
                if(e.target.value === "true"){
                  setIsDone(true);
                }
                else {
                  setIsDone(false);
                }
                // setIsDone(e.target.value);
            }}> 
            <option value = "true">true</option>
            <option value = "false">false</option>
          </select>
          <br></br>
          <label className = "createl">Mark as Starred: </label>
          <select className = "creates" value = {isStarred} onChange = {
            (e) => {
                if(e.target.value === "true"){
                  setIsStarred(true);
                }
                else {
                  setIsStarred(false);
                }
                // setIsDone(e.target.value);
            }}> 
            <option value = "true">true</option>
            <option value = "false">false</option>
          </select>
          <br></br>    
          <label className = "createl">Mark as InProgress: </label>
          <select className = "creates" value = {isInProgress} onChange = {
            (e) => {
                if(e.target.value === "true"){
                  setIsInProgress(true);
                }
                else {
                  setIsInProgress(false);
                }
                // setIsDone(e.target.value);
            }}> 
            <option value = "true">true</option>
            <option value = "false">false</option>
          </select>
          <br></br>  
          <div className = "create">
            <label className = "createl">Deadline: </label>
            <DateTimePicker  onChange = {setDeadline} value = {deadline} format = "y-MM-dd h:mm:ss a"/>
          </div>  
          <br></br>  
          { !isPending && <button className = "createb">Edit Task</button>}
          { isPending && <button disabled>Editing Task.....</button>}
          <br></br>  
          <br></br>  
        </form>
      </div>)}
    </div>
  );
}
 
export default EditTask;