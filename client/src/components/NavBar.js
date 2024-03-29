import React, { Component } from "react";
import {
MDBNavbar, 
MDBNavbarBrand, 
MDBNavbarToggler, 
MDBCollapse, 
MDBNavbarNav,
MDBNavItem,
MDBDropdown,
MDBDropdownToggle,
MDBDropdownMenu,
MDBDropdownItem,
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from '../images/logo.png';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="white" light expand="md" fixed="top">
        <MDBNavbarBrand>
        <a className="logo" href="/">
        <img className="logo" src={Logo} alt="ancient-philosopher" height="60px" width="70px" />
        </a>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle className="white" nav caret>
                  <span className="mr-2">Categories</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/ancient">Ancient</MDBDropdownItem>
                  <MDBDropdownItem href="/enlightenment">Enlightenment</MDBDropdownItem>
                  <MDBDropdownItem href="/modern">Modern</MDBDropdownItem>
                  <MDBDropdownItem href="/artists">Aritsts</MDBDropdownItem>
                  <MDBDropdownItem href="/entrepreneurs">Entrepreneurs</MDBDropdownItem>
                  <MDBDropdownItem href="/scientists">Scientists</MDBDropdownItem>
                  <MDBDropdownItem href="/api">API</MDBDropdownItem>
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

export default NavbarPage;