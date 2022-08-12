import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Nav className="me-auto">
                    <NavLink to="/users">
                        <div className="nav-link ">Users</div>
                    </NavLink>
                    <NavLink to="/photos">
                        <div className="nav-link ">Photos</div>
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;
