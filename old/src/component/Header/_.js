import React from 'react'
import {Navbar,Nav,Button} from 'react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const NavBar = props => {
    return (
            <Navbar expand="lg" className=" " >
            <Navbar.Brand  className="" href="/">Pelagios</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                    <Nav.Link className="px-3 text-center" bg="dark" variant="primary" href="/signin">Login</Nav.Link>
                    <Nav.Link className="px-3 text-center" href="/signup">SignUp</Nav.Link>
                    <Nav.Link className="px-3 text-center" href="/profile">Profile</Nav.Link>
                    <Nav.Link className="px-3 text-center" href="/createpost">Create Post</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar> 
    )
}

export default NavBar
