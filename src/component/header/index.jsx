import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

function Header() {
  return (
    <Navbar bg="body-tertiary" expand="lg" className="header">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-6/438305488_1120474259123204_5879213583446500616_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=godXrO0cdM0Q7kNvgGDieY5&_nc_ht=scontent.fsgn5-15.fna&_nc_gid=AVNoNWX3VGD-RQ6amrrFN5E&oh=00_AYChqwid4tQFCcxmyUcbhBvIhmyL-OY-3uPD_h1DH7D9bg&oe=66E726BF"
            width={120}
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Về lớp học
            </Nav.Link>
            <Nav.Link as={Link} to="/toeic">
              Lớp học TOEIC
            </Nav.Link>
            <Nav.Link as={Link} to="/ielts">
              Lớp học IELTS
            </Nav.Link>
            <Nav.Link as={Link} to="/result">
              Kết quả lớp học
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
