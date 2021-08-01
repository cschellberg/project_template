import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer >
            <Container fluid={true}>
                <Row className="footer border-top justify-content-center p-4 bg-light">
                    <Col className="p=0 d-flex justify-content-end">
                        <div className="github mr-4" ><a href="https://github.com/mschellberg"><FaGithub size="1.5em" /></a></div>
                        <a href="https://www.linkedin.com/in/melanie-schellberg-738a2b1b7/"><FaLinkedin size="1.5em"/></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
 
export default Footer;