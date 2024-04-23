import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <Navbar expand="lg" bg="dark" className="bg-body-tertiary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as = {Link} to="/">RestroApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to="/">Home</Nav.Link>
            <Nav.Link as = {Link} to="/about">About</Nav.Link>
            <Nav.Link as = {Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as = {Link} to="/add">Add</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;