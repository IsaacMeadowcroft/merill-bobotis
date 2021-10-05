import React, { useState } from 'react';
import '../css/Home.css';
import { Button, Col, Container, Image, Offcanvas, Row, Stack } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import LandingPage from '../assets/LandingPage.jpg'


function Home() {
  return (
    <Container fluid style={{backgroundColor: 'black', padding: '0px'}} id="Home">
      <Row xs={1} sm={1} md={3}>
        <Col md={4}>
          <Image src={LandingPage} fluid />
        </Col>
        <Col md={4}>
          <Col className="name">
            MERILL BOBOTIS
          </Col>
          <Col className="bar" />
          <Col className="profession">
            Visual Artist
          </Col>
        </Col>
        <Col md={1}>
          <SideBar/>
        </Col>
      </Row>
    </Container>
  );
}

function SideBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} variant="outline-dark" className="sidebar-toggle"/>
      <Offcanvas show={show} onHide={handleClose} placement={"end"} style={{backgroundColor: "black", borderColor: "white", borderRight: "1px"}}>
        <Offcanvas.Header closeButton />
        <Offcanvas.Body style={{padding: "0px", backgroundColor: "black"}}>
          <MenuItems />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function MenuItems() {
  return (
    <Stack gap={3}>
      <Container>
        <a href="#Home" className="sidebar-button">Home</a>
      </Container>
      <Container>
        <a href="#Prints" className="sidebar-button">Prints</a>
      </Container>
      <Container>
        <a href="#Portfolio" className="sidebar-button">Portfolio</a>
      </Container>
      <Container>
        <a href="#About" className="sidebar-button">About</a>
      </Container>
      <Container>
        <a href="#Contact" className="sidebar-button">Contact</a>
      </Container>
    </Stack>
  );
}


export default Home;
