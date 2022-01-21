// import {useNavigate} from 'react-router-dom';
import Task from "./Task";
import {useState, useEffect} from 'react';
import {Button, DropdownButton, Dropdown} from 'react-bootstrap';

const TaskList = (props) => {
  // console.log(props);
  // console.log(tasks);

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('All Tasks')
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(false);

  useEffect(() => {
    const t = props.tasks;
    const sorted = sort === true ? [...t].sort((a, b) => new Date(a.deadline) - new Date(b.deadline)) : t;
    setTasks(sorted);
  }, [props.tasks, sort]);

  const filteredTasks = search.length === 0 ? tasks : tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));
  const type = props.type;

  const [filterType, setType] = useState(props.type);
  const handleFilter = (e) => {
    setTitle(e);
    if(e === "All Tasks"){
      setType("normal");
    }
    else if(e === "Starred Tasks"){
      setType("starred-home");
    }
    else if(e === "In Progress Tasks"){
      setType("inprogress-home");
    }
    else {
      setType("completed-home");
    }
  }

  if(type === "starred" || filterType === "starred-home"){
    return ( 
      <div className = "task-list">
        <div className="d-md-flex flex-row">
          <input className="m-2" type = "text" placeholder = "Search tasks" value = {search} onChange={(e) => setSearch(e.target.value)}></input>{' '}
          <Button className="m-2" type = "submit" onClick = {() => { if(sort ===false) {setSort(true)} else {setSort(false)}}}>Sort</Button>
          {filterType === "starred-home" && <DropdownButton className="m-2" id="dropdown-basic-button" title = {title} onSelect = {(e) => handleFilter(e)}>
            <Dropdown.Item eventKey = "All Tasks">All Tasks</Dropdown.Item>
            <Dropdown.Item eventKey = "Starred Tasks">Starred Tasks</Dropdown.Item>
            <Dropdown.Item eventKey = "In Progress Tasks">In Progress Tasks</Dropdown.Item>
            <Dropdown.Item eventKey = "Completed Tasks">Completed Tasks</Dropdown.Item>
          </DropdownButton>}
          <p></p>
        </div>
        {filteredTasks.map(task => (
          <div key = {task.id} > 
            {task.isStarred && <Task task = {task} type = "normal"/>}
          </div>
        ))}
      </div>
    );
  }
  else if(type === "completed" || filterType === "completed-home"){
    return ( 
      <div className = "task-list">
        <div className="d-md-flex flex-row">
          <input className="m-2" type = "text" placeholder = "Search tasks" value = {search} onChange={(e) => setSearch(e.target.value)}></input>{' '}
          <Button className="m-2" type = "submit" onClick = {() => { if(sort ===false) {setSort(true)} else {setSort(false)}}}>Sort</Button>
          {filterType === "completed-home" && <DropdownButton className="m-2" id="dropdown-basic-button" title = {title} onSelect = {(e) => handleFilter(e)}>
            <Dropdown.Item eventKey = "All Tasks">All Tasks</Dropdown.Item>
            <Dropdown.Item eventKey = "Starred Tasks">Starred Tasks</Dropdown.Item>
            <Dropdown.Item eventKey = "In Progress Tasks">In Progress Tasks</Dropdown.Item>
            <Dropdown.Item eventKey = "Completed Tasks">Completed Tasks</Dropdown.Item>
          </DropdownButton>}
          <p></p>
        </div>
        {filteredTasks.map(task => (
          <div key = {task.id} > 
            {task.isDone && <Task task = {task} type = "normal"/>}
          </div>
        ))}
      </div>
    );
  }
  else if(type === "inprogress" || filterType === "inprogress-home"){
    return ( 
      <div className = "task-list">
        <div className="d-md-flex flex-row">
          <input className="m-2" type = "text" placeholder = "Search tasks" value = {search} onChange={(e) => setSearch(e.target.value)}></input>{' '}
          <Button className="m-2" type = "submit" onClick = {() => { if(sort ===false) {setSort(true)} else {setSort(false)}}}>Sort</Button>
          {filterType === "inprogress-home" && <DropdownButton className="m-2" id="dropdown-basic-button" title = {title} onSelect = {(e) => handleFilter(e)}>
            <Dropdown.Item eventKey = "All Tasks">All Tasks</Dropdown.Item>
            <Dropdown.Item eventKey = "Starred Tasks">Starred Tasks</Dropdown.Item>
            <Dropdown.Item eventKey = "In Progress Tasks">In Progress Tasks</Dropdown.Item>
            <Dropdown.Item eventKey = "Completed Tasks">Completed Tasks</Dropdown.Item>
          </DropdownButton>}
          <p></p>
        </div>
        {filteredTasks.map(task => (
          <div key = {task.id} > 
            {task.isInProgress && <Task task = {task} type = "normal"/>}
          </div>
        ))}
      </div>
    );
  }
  return ( 
    <div className = "task-list">
      <div className="d-md-flex flex-row">
        <input className="m-2" type = "text" placeholder = "Search tasks" value = {search} onChange={(e) => setSearch(e.target.value)}></input>{' '}
        <Button className="m-2" type = "submit" onClick = {() => { if(sort ===false) {setSort(true)} else {setSort(false)}}}>Sort</Button>
        {type === "normal" && <DropdownButton className="m-2" id="dropdown-basic-button" title = {title} onSelect = {(e) => handleFilter(e)}>
            <Dropdown.Item eventKey = "All Tasks">All Tasks</Dropdown.Item>
            <Dropdown.Item eventKey = "Starred Tasks">Starred Tasks</Dropdown.Item>
            <Dropdown.Item eventKey = "In Progress Tasks">In Progress Tasks</Dropdown.Item>
            <Dropdown.Item eventKey = "Completed Tasks">Completed Tasks</Dropdown.Item>
          </DropdownButton>}
        <p></p>
      </div>
      {filteredTasks.map(task => (
        <div key = {task.id} className="m-2"> 
          <Task task = {task} type = {type}/>
        </div>
      ))}
    </div>
  );
}
 
export default TaskList;