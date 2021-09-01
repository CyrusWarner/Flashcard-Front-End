import {Nav, Navbar, Container} from "react-bootstrap"
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";


const NavigationBar = () => {

  return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Flashcards</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link style={{color: "white"}} as={Link} to={"/"}><AiIcons.AiOutlineHome size="1.5rem" /> Home</Nav.Link> 
    </Nav>
    </Container>
  </Navbar>
  );
};

export default NavigationBar

