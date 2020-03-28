import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from '../images/logo.png';
import '../styles/NavBar.css';

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar 
        color="white"
        dark
        expand="md"
        fixed="top"
        scrolling
        light
        >
        <MDBNavbarBrand>
        <a className="logo" href="/">
        <img src={Logo} alt="ancient-philosopher" height="60px" width="70px" />
        </a>
        </MDBNavbarBrand>
        <MDBNavbarToggler className="black" onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret className="black-text">
                  <span className="mr-2">Categories</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/ancient">Ancient</MDBDropdownItem>
                  <MDBDropdownItem href="/enlightenment">Enlightenment</MDBDropdownItem>
                  <MDBDropdownItem href="/modern">Modern</MDBDropdownItem>
                  <MDBDropdownItem href="/artists">Artists</MDBDropdownItem>
                  <MDBDropdownItem href="/entrepreneurs">Entrepreneurs</MDBDropdownItem>
                  <MDBDropdownItem href="/scientists">Scientists</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default Navbar;