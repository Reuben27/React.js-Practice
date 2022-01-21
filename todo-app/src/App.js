import Home from './Home';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddTask from './AddTask';
import Navibar from './Navbar';
import Task from './Task';
import DeletedTasks from './DeletedTasks'
import StarredTasks from './StarredTasks'
import CompletedTasks from './CompletedTasks';
import InProgressTasks from './InProgressTasks';
import EditTask from './EditTask';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <div className = "main">
            <Navibar />
            <div className = "content">
              <Routes>
                <Route exact path = "/" element = {<Home/>} />
              </Routes>
              <Routes>
                <Route exact path = "/add-task" element = {<AddTask/>} />
              </Routes>
              <Routes>
                <Route exact path = "/edit-task/:id" element = {<EditTask/>} />
              </Routes>
              <Routes>
                <Route exact path = "/tasks/:id" element = {<Task/>} />
              </Routes>
              <Routes>
                <Route exact path = "/deleted-tasks" element = {<DeletedTasks/>} />
              </Routes>
              <Routes>
                <Route exact path = "/starred-tasks" element = {<StarredTasks/>} />
              </Routes>
              <Routes>
                <Route exact path = "/completed-tasks" element = {<CompletedTasks/>} />
              </Routes>
              <Routes>
                <Route exact path = "/inprogress-tasks" element = {<InProgressTasks/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
