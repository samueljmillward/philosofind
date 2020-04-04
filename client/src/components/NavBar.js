import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand } from "mdbreact";
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
      <MDBNavbar color="white" dark expand="md" fixed="top">
        <MDBNavbarBrand>
        <a className="logo" href="/">
        <img className="logo" src={Logo} alt="ancient-philosopher" height="60px" width="70px" />
        </a>
        </MDBNavbarBrand>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;