import { Container, Navbar, NavbarBrand,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () =>{
    return (
        <div>
            <Navbar bg="primary" variant="dark">

                <Container>

                    <Navbar.Brand  to="/">Employee management System</Navbar.Brand>

                    <Nav className="ms-auto">

                        <Nav.Link as={Link} to="/" className="nav-link">  Employees </Nav.Link>
                        <Nav.Link as={Link} to="/employee" className="nav-link">Post Employee </Nav.Link>
                    </Nav>
                </Container>
  

            </Navbar>
        </div>
    )
}

export default Header