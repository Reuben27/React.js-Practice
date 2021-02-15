import logo from './logo.svg';
import './App.css';

//JSX - HTML like templates i.e. syntax identical to HTML
//In the background a transpiler called Babel converts the JSX temmplate into HTML and renders it to the DOM.
//Function name should start with a capital letter.
//React websites are made up of multiple components like this.
//A component is generally a function that returns a JSX Template
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world!! I am Reuben.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
//To export the component function so that it can be used by other files.