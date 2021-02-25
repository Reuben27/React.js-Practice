import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
    return (  
        <div className = "Home">
            <Jumbotron fluid>
                <Container>
                    <h1>Student Academic Council</h1>
                    <p></p>
                </Container>
            </Jumbotron>
            <Container>
                <Row>
                    <Col sm = {12}>
                        <h2 className = "mt-4">What We Do</h2>
                        <p>The Student Academic Council is a <b>student body</b> that takes care of student-organized academic events,
                        coordination among Class Representatives, outreach of academic hobby groups, and documentation of these
                        activities. </p>
                        <p>On this website, you can find information about our upcoming events, hobby group activities, courses, blog
                        posts by students about various academic experiences (courses, internships, conferences, etc.), student
                        opinions and details about the ADH and PAL programs. The links below (and the main menu) will help you find
                        your way.</p>
                        <p>Ranchos of IITGN is a platform to celebrate the 'out-of-classroom' academic happenings at IIT Gandhinagar. Do
                        check out the Facebook page.</p>
                        <Link to ="https://www.facebook.com/ranchossofiitgn/" target="_" className ="btn btn-outline-dark"><i className="fa fa-facebook-square"></i> Ranchos of IITGN</Link>
                    </Col>
                </Row>
            </Container>            
        </div>
    );
}
 
export default Home;