import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar expand="lg" fixed='top' className='mx-auto bg-success'>
        <Container>
            <Navbar.Brand className="mr-auto">
            <span className="ml-2 text-white">Perpustakaan</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar" className="justify-content-end">
            <Nav>
                <Nav.Item>
                <Link to="/" className="nav-link text-white">Home</Link>
                </Nav.Item>
                <Nav.Item>
                <Link to="/manage-books" className="nav-link text-white">Manage Books</Link>
                </Nav.Item>
                <Nav.Item>
                <Link to="/manage-membership" className="nav-link text-white">Manage Membership</Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavigationBar;