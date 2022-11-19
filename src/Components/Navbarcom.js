import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logodark from '../images/logo dark.png'
import {Link} from "react-router-dom"
import './Login.css'


const Navbarcom = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                    <div className="d-flex"></div>
                        <div className='navimg'>
                        <Link to='/'><img src={logodark}  alt=""/></Link>
                        </div>
                       
                    </Navbar.Brand> 
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#link"><Link to='/Login'>Login</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to='/Register'>Register</Link></Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navbarcom