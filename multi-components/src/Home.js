import {useState} from 'react';

const Home = () => {
    const[text, setText] = useState('Did you click?');

    const handleClick = (e) => {
        console.log("Hey! I am Reuben.");
        console.log("Event object", e);
        setText('Yes you did!');
    }

    const handleClickAgain = (name, e) => {
        console.log('Hey! I am ' + name);
        console.log("Event object", e);
        console.log('Event Target', e.target);
        setText('You clicked again!')
    }
    return ( 
        <div className="home">
            <h2> Just a homepage with some buttons! </h2>
            <br></br>
            <h3> Hey! I am Reuben</h3>
            <br></br>
            <h3> {text} </h3>
            <br></br>
            <button onClick = {handleClick}>Click me</button>
            <br></br><br></br>
            <button onClick = {(e) => {
                handleClickAgain('Reuben', e);
            }}>Click me again</button>
        </div>
    );
}
 
export default Home;