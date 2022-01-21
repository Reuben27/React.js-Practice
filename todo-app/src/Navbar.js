// import {Link} from 'react-router-dom';

// //To handle the routing only in the browser and to intercept those requests.
// const Navbar = () => {
//     return (
//       <nav className = "navbar">
//         <h1>Todo App</h1>
//         <div className = "links">
//           <Link to = "/" style = {{ 
//             color: '#f1356d', 
//           }}>Home</Link>
//           <Link to = "/add-task" style = {{ 
//             color: 'white', 
//             backgroundColor: '#f1356d',
//             borderRadius: '8px' 
//           }}>New Task</Link>
//         </div>
//       </nav>
//     );
// }
   
// export default Navbar;

import {Navbar, Container, Offcanvas, Nav} from 'react-bootstrap'

const Navibar = () => {
  return (
    <Navbar bg="light" expand={false} fixed="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">ToDo App</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className = "p-3" href = "/">Home</Nav.Link>
              <Nav.Link className = "p-3" href = "/add-task">Add Task</Nav.Link>
              <Nav.Link className = "p-3" href = "/starred-tasks">Starred Tasks</Nav.Link>
              <Nav.Link className = "p-3" href = "/inprogress-tasks">In Progress Tasks</Nav.Link>
              <Nav.Link className = "p-3" href = "/completed-tasks">Completed Tasks</Nav.Link>
              <Nav.Link className = "p-3" href = "/deleted-tasks">Deleted Tasks</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
        <Nav className = "d-flex flex-row">
          <Nav.Link className = "p-3" href = "/">Home</Nav.Link>
          <Nav.Link className = "p-3" href = "/add-task">Add Task</Nav.Link>
        </Nav>      
      </Container>
    </Navbar>
  );
}
   
export default Navibar;