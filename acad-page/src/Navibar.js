import Navbar from 'react-bootstrap/Navbar';
//import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/NavDropdown';
//import Form from 'react-bootstrap/Form';
//import FormControl from 'react-bootstrap/FormControl';

const Navibar = () => {
    return (  
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Student Academic Council</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item>
                    <Nav.Link href = "/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href = "/about">About</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}
 
export default Navibar;