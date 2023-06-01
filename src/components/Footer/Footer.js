import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid className="footer p-4 bg-success">
            <Row className="text-white">
                <Col md={4} className="text-center">
                    <h5>Follow Us</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!" className='text-decoration-none text-white'>Facebook</a></li>
                        <li><a href="#!" className='text-decoration-none text-white'>Twitter</a></li>
                        <li><a href="#!" className='text-decoration-none text-white'>Instagram</a></li>
                    </ul>
                </Col>
                <Col md={4} className="text-center">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="#!" className='text-decoration-none text-white'>Home</a></li>
                        <li><a href="#!" className='text-decoration-none text-white'>About Us</a></li>
                        <li><a href="#!" className='text-decoration-none text-white'>Contact Us</a></li>
                    </ul>
                    </Col>
                    <Col md={4} className="text-center">
                    <h5>Contact Us</h5>
                    <ul className="list-unstyled">
                        <li>Jl. Berlubang No.12</li>
                        <li>Lumpang, Indonesia</li>
                        <li>Perpustakaan@gmail.com</li>
                        <li>555-555-5555</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;