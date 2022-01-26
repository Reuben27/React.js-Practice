import Home from './Home';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navibar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navibar />
        <div className = "content">
          <Routes>
            <Route exact path = "/" element = {<Home/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
