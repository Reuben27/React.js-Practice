import {Navbar, Container, Nav} from 'react-bootstrap'

const Navibar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href = "/">Covid Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link className = "p-3" href = "/">Home</Nav.Link>
            <Nav.Link className = "p-3" href = "https://rapidapi.com/Gramzivi/api/covid-19-data/">API</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
   
export default Navibar;