import Navibar from './Navibar';
import Home from './Home';
import Events from './Events';
import About from './About';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navibar/>
        <div className="content">
        <Switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route exact path = "/about">
              <About />
            </Route>
            <Route exact path = "/events">
              <Events />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
