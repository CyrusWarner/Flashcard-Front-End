import {Nav, Navbar} from "react-bootstrap"
import { Link } from "react-router-dom";


const NavigationBar = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Flashcards</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar
