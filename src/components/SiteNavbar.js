import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import AddRecord from "./AddRecord";

const SiteNavbar = () => {
  return (
    <Navbar bg="dark bg-gradient" variant="dark">
      <Container>
        <Navbar.Brand href="/">Add New Record</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link className="text-white text-decoration-none" to={"/"}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/new"}>
              <AddRecord />
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to={"/about"}>About</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
