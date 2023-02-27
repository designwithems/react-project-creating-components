import './content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import svg from "../img/svg.svg";
import Button from 'react-bootstrap/Button';


function Content () {
  return (
    <div className="content">
      <Container  fluid>
        <Row className="justify-content-md-center home space">
          <Col>
          <Col mx="auto" md className=''>
            <h2>FAST.<br/>EFFICIENT.<br/>CUSTOMER-FOCUSED</h2>
            <p>We're experienced enough to help an expert</p>
            <Button>Get a quote</Button>
          </Col>
          </Col>
          <Col md="auto">
            <Image fluid src={svg} className='img-content'></Image>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="justify-content-md-center space">
            <h1 className='h1-content'>Don't pay something you can get for Free!</h1>
          <Row className='pt-5'>
            <Col className='box' md>
              <h2 className='text-center h2-content'>FREE POSWEB</h2>
              <p>View Sales, Reports, Items, and Inventory with the Zank POS Enterprises POSWEB Application on a mobile phone, tablet, or laptop.</p>
            </Col>
            <Col className='box '>
              <h2 className='text-center h2-content'>FREE CONTACT TRACING APPLICATION</h2>
              <p>With our new Contactless Tracing feature, you can keep track of who enters your store, both customers and employees.</p>
            </Col>
            <Col className='box' md>
              <h2 className='text-center h2-content'>FREE PRICE CHECKER APP
</h2>
              <p>Using our Free Price Checker App, users can view item prices and inventory stocks on your mobile phone.</p>
            </Col>
          </Row>
          <Row className='pt-5 flex flex-center'>
            <Col className='box p-3' md>
              <h2 className='text-center h2-content'>FREE MEMBERSHIP OR LOYALTY POINTS SYSTEM
</h2>
              <p>Earn and see Customer Available points with our Free Reward Points App on your mobile device.</p>
            </Col>
            <Col className='box p-3'>
              <h2 className='text-center h2-content'>FREE POSWEB</h2>
              <p>View Sales, Reports, Items, and Inventory with the Zank POS Enterprises POSWEB Application on a mobile phone, tablet, or laptop.</p>
            </Col>
          </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Content;
