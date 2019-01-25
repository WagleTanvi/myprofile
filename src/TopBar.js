import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import logo from './img/logo2.png'
import './aboutstyles.css'
const navItemStyle = {
    padding: '0px 30px 0px 30px',
}
const linkStyle = {
    textDecoration: 'none', 
    color: "#202429"
}
class TopBar extends Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  } 
  close() {
    this.setState({
      isOpen: false
    });
  } 
    state = {  }
    render() { 
        return ( 
            // the navbar toggler is when it becomes too small  
            /*fixed:"top"*/
                <Navbar  fixed="top" light expand="md" style={{fontFamily: "Karla, sans-serif", fontSize: "20px"}} className="topBar">
                <NavbarBrand href="/home"><img alt="logo" src={logo} width="50" style={{padding:"2px", position:"relative", top: "0px", left:"0px"}}/></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem style={navItemStyle} className="logo">
                        <Link onClick={this.close}  style={linkStyle} to="/"><b>Home</b></Link>
                    </NavItem>
                    <NavItem style={navItemStyle} className="logo black">
                         <Link onClick={this.close} style={linkStyle} to="/about/" className="blackBlue"><b>About</b></Link> 
                    </NavItem>
                    <NavItem style={navItemStyle} className="logo">
                        <Link onClick={this.close} style={linkStyle} to="/projects/"><b>Projects</b></Link> 
                    </NavItem>
                    <NavItem style={navItemStyle} className="logo">
                        <Link onClick={this.close} style={linkStyle} to="/contact/"><b>Contact</b></Link> 
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
           
        );
    }
}
 
export default TopBar;