import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Col, Row, Container, Button, Navbar, Nav, NavDropdown, Modal } from 'react-bootstrap'
import SearchBar from './SearchBar'


const App = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className="App">

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as="span" onClick={() => setShowModal(true)}>Mostrar modal</Nav.Link>
            </Nav>
            <SearchBar />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <header className="hero">
        <Container>
          <h1>hey!</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae recusandae sunt maxime, tempora odio similique voluptas sint id.</p>
        </Container>
      </header>

      <section className='mt-5'>

        <Container>
          <h2>Este es mi contenido en rejilla</h2>
          <hr />

          <Row>

            <Col lg={3} md={6}>
              <article className="mb-5">
                <img src="https://s1.eestatic.com/2023/05/09/madrid/ocio/762434016_233009327_1706x960.jpg" alt="Image" />
                <h3>Batman the ride</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque error amet corrupti ut recusandae delectus veniam qui</p>

                <div className="d-grid gap-2">
                  <Button variant='dark' size='sm'>Ir a los detalles</Button>
                </div>

              </article>

            </Col>

            <Col lg={3} md={6}>
              <article className="mb-5">
                <img src="https://s1.eestatic.com/2023/05/09/madrid/ocio/762434016_233009327_1706x960.jpg" alt="Image" />
                <h3>Batman the ride</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque error amet corrupti ut recusandae delectus veniam qui</p>

                <div className="d-grid gap-2">
                  <Button variant='dark' size='sm'>Ir a los detalles</Button>
                </div>              </article>
            </Col>

            <Col lg={3} md={6}>
              <article className="mb-5">
                <img src="https://s1.eestatic.com/2023/05/09/madrid/ocio/762434016_233009327_1706x960.jpg" alt="Image" />
                <h3>Batman the ride</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque error amet corrupti ut recusandae delectus veniam qui</p>

                <div className="d-grid gap-2">
                  <Button variant='dark' size='sm'>Ir a los detalles</Button>
                </div>
              </article>
            </Col>

            <Col lg={3} md={6}>
              <article className="mb-5">
                <img src="https://s1.eestatic.com/2023/05/09/madrid/ocio/762434016_233009327_1706x960.jpg" alt="Image" />
                <h3>Batman the ride</h3>
                <hr />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque error amet corrupti ut recusandae delectus veniam qui</p>

                <div className="d-grid gap-2">
                  <Button variant='dark' size='sm'>Ir a los detalles</Button>
                </div>
              </article>
            </Col>


          </Row>

        </Container>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>

        </Modal>



      </section>
    </div>
  )
}

export default App