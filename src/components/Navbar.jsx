import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

export default function Navigator() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Accessibility Adjustments</Modal.Title>
        </Modal.Header>
        <form class="form-inline mx-2 pt-2 my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Unclear content? Search in dictionary..." aria-label="Search" />
        </form>
        <Card className="m-3">
          <Card.Body>
            <Card.Title>Choose the right accessibility profile for you</Card.Title>
            <Form className="m-3">
              <Form.Check
                type="switch"
                id="seizure-safe-switch"
                label="Seizure Safe Profile"
              />
              <Form.Check
                type="switch"
                id="vision-impaired-switch"
                label="Vision Impaired Profile"    
              />
            </Form>
          </Card.Body>
        </Card>
        <Card className="m-3">
          <Card.Body>
            <Card.Title>Content Adjustments</Card.Title>
            <div class="container-fluid">
              <div class="d-flex flex-column">
              <div class="border text-center pt-3 mb-1 div-hover">
              <i class="fa-solid fa-font"></i>
              <p>Readable Font</p>
            </div>
            <div class="border text-center pt-3 mt-1 div-hover">
              <i class="fa-solid fa-magnifying-glass"></i>
              <p>Text Magnifier</p>
            </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="m-3">
          <Card.Body>
            <Card.Title>Color Adjustments</Card.Title>
            <div class="container-fluid">
              <div class="d-flex flex-column">
              <div class="border text-center pt-3 mb-1 div-hover">
              <i class="fa-solid fa-moon"></i>
              <p>Dark Adjustments</p>
            </div>
            <div class="border text-center pt-3 mt-1 div-hover">
              <i class="fa-solid fa-sun"></i>
              <p>Light Adjustments</p>
            </div>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="m-3">
          <Card.Body>
            <Card.Title>Orientation Adjustments</Card.Title>
            <div class="container-fluid">
              <div class="d-flex flex-column">
              <div class="border text-center pt-3 mb-1 div-hover">
              <i class="fa-solid fa-volume-xmark"></i>
              <p>Mute Sounds</p>
            </div>
            <div class="border text-center pt-3 mt-1 div-hover">
              <i class="fa-solid fa-bolt"></i>
              <p>Stop Animations</p>
            </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Modal>
      <Container>
        <Navbar.Brand><img src="prepr.png"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Explore</Nav.Link>
            <Nav.Link>Dashboard</Nav.Link>
            <Nav.Link>My Challenges</Nav.Link>
            <Nav.Link>My Labs</Nav.Link>
            <Nav.Link>My Projects</Nav.Link>
            <Nav.Link>Career Explorer</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div>
          <button type="button" class="btn" onClick={handleShow}><i class="fa-solid fa-wheelchair"></i></button>
          <button type="button" class="btn"><i class="fa-solid fa-bell"></i></button>
          <button type="button" class="btn"><i class="fa-solid fa-comment"></i></button>
          <button type="button" class="btn"><i class="fa-solid fa-circle-question"></i></button>
        </div>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        </form>
      </Container>
    </Navbar>
  )
}