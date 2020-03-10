import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Contact from './Contact';

const FooterPage = () => {
  return (
    <MDBFooter color="grey" className="font-small pt-4 mt-8">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">About Us</h5>
            <p>
              The Philosofind team are all graduates of the 
              Manchester Codes software engineering bootcamp.
            </p>
            <p>It was created by Sam Millward, Sean Campbell
            & James Barrington as the final project for the course.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">About Us</h5>
            <p>
              The Philosofind team are all graduates of the 
              Manchester Codes software engineering bootcamp.
            </p>
            <p>It was created by Sam Millward, Sean Campbell
            & James Barrington as the final project for the course.
            </p>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Contact Us</h5>
              <Contact />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> philosofind.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;