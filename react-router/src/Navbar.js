import {Link} from 'react-router-dom';

//To handle the routing only in the browser and to intercept those requests.
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
          <Link to = "/">Home</Link>
          <Link to = "/create" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
          }}>New Blog</Link>
        </div>
      </nav>
    );
}
   
export default Navbar;