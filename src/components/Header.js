import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { login } from '../actions/loginActions'

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Posts App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Text style={{ marginRight: "30px" }}>
                        <b>Logged in as :</b>{this.props.currentUser.name}
                    </Navbar.Text>
                    <Image src={this.props.currentUser.image} roundedCircle style={{ width: "auto", height: 60, marginRight: "30px" }}></Image>
                    <Nav.Link as={Button} onClick={() => this.props.login(null)}>Logout</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
const mapStateToProps = state => (
    {
        currentUser: state.loginReducer.currentUser
    }
)
export default connect(mapStateToProps, { login })(Header)