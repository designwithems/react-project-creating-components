import './footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer () {
  return (
    <div className="Footer">
      <Container fluid>
        <Row className='padding-footer'>
          <Col md="auto"><Navbar.Brand href="#home" className='brand-footer'>Everthing Technology</Navbar.Brand></Col>
          <Col>
          <ul>
            <li><a>About Us</a></li>
            <li>Address: 696 Brgy Valencia Aurora Blvd.  Cubao, Quezon City, Metro Manila, Philippines 1101 </li>
            <li>Contact Us: +632-88816248</li>
            <li>contactus@.com</li>            
          </ul>
          </Col>
        </Row>
        <Row className='bottoms'>
        <span className='text-center text-white'>Copyright © 2023 | Powered by Smart POS ENTERPRISES</span>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
