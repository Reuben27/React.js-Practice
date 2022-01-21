import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {AiFillDelete, AiFillEdit, AiOutlineStar, AiFillStar} from 'react-icons/ai';
import {BsBarChartLine, BsBarChartLineFill } from 'react-icons/bs';
import {IoCheckmarkDoneCircleOutline, IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Task = (props) => {
  const task = props.task;
  const type = props.type;
  
  const handleDelete = (task) => {
    // console.log(task.id);
    fetch('http://localhost:8000/deleted-tasks', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({"title" : task.title, "assignee" : task.assignee, "isDone": task.isDone, "deadline" : task.deadline,}),
    }).then(() => {
      fetch('http://localhost:8000/tasks/' + task.id, {
      method: 'DELETE',
      }).then(() => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      });
    });
  }

  const handlePermanentDelete = (task) => {
    // console.log(task.id);
    fetch('http://localhost:8000/deleted-tasks/' + task.id, {
    method: 'DELETE',
    }).then(() => {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
  }

  const handleDone = (task) => {
    let doo = false;
    if(task.isDone === false){
      doo = true;
    }
    fetch('http://localhost:8000/tasks/' + task.id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "title" : task.title, "isDone" : doo, "isStarred": task.isStarred, "isInProgress": task.isInProgress}),
    }).then(() => {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
  }

  const handleStar = (task) => {
    let star = false;
    if(task.isStarred === false){
      star = true;
    }
    fetch('http://localhost:8000/tasks/' + task.id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "title" : task.title, "isDone" : task.isDone, "isStarred": star, "isInProgress": task.isInProgress}),
    }).then(() => {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
  }
  
  const handleInprogress = (task) => {
    let pro = false;
    if(task.isInProgress === false){
      pro = true;
    }
    fetch('http://localhost:8000/tasks/' + task.id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ "title" : task.title, "isDone" : task.isDone, "isStarred": task.isStarred, "isInProgress": pro}),
    }).then(() => {
      // eslint-disable-next-line no-restricted-globals
      location.reload();
    });
  }

  return (
    <Card>
      <Card.Body>
        <div className = "todo d-md-flex flex-row">
          <h5 style={{ textDecoration: task.isDone ? "line-through" : "" }}>{task.title}</h5>
          <div>
            {type === "normal" && <Button variant="outline-primary" type = "submit" onClick = {() => {handleStar(task)}}>{task.isStarred === false && <AiOutlineStar size={18}/>} {task.isStarred && <AiFillStar size={18}/>}</Button>}{' '}
            {type === "normal" && <Button variant="outline-success" type = "submit" onClick = {() => {handleInprogress(task)}}>{task.isInProgress === false && <BsBarChartLine size={18}/>} {task.isInProgress && <BsBarChartLineFill size={18}/>}</Button>}{' '}
            {type === "normal" && <Button variant="outline-success" type = "submit" onClick = {() => {handleDone(task)}}>{task.isDone === false && <IoCheckmarkDoneCircleOutline size={18}/>} {task.isDone && <IoCheckmarkDoneCircleSharp size={18}/>}</Button>}{' '}
            {type === "normal" && <Link to={{ pathname: `/edit-task/${task.id}`, state:{task:task}}} ><Button variant="outline-danger" type = "submit"><AiFillEdit/></Button></Link>}{' '}
            {type === "normal" && <Button variant="outline-danger" type = "submit" onClick = {() => {handleDelete(task)}}>✕</Button>}
            {type === "deleted" && <Button variant="outline-danger" type = "submit" onClick = {() => {handlePermanentDelete(task)}}><AiFillDelete size={18}/></Button>}
          </div> 
        </div>
        <div>
          <p></p>
          <span>Assignee: {task.assignee}</span>
        </div>
        <div>
          <p></p>
          <span>Deadline: {moment(task.deadline).format("dddd, MMMM Do YYYY, h:mm:ss a")}</span>
        </div>
      </Card.Body>
    </Card>
  );
}
 
export default Task;