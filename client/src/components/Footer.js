import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Contact from './Contact';
import MCRCodes from '../images/MCR_Codes.png';
import '../styles/Footer.css';

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
            <p>Manchester Codes is the UK’s original part-time coding school.</p>
            <p>Started in 2017 the course trains people with little to no prior coding experience  over an intensive 24 week course, covering all of the fundamentals required for to become a Software Developer.
            </p>
            <a href="https://www.manchestercodes.com/">
              <img src={MCRCodes} className="MCRCodes" alt="manchester-codes-logo" height="80px" width="250px"></img>
            </a>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Philosofind</h5>
            <p>
              Philosofind is a single page application designed to help you make sense of the world around you. 
            </p>
            <p>
              Life can be stressful, confusing and painful at times but it doesn't always need to be that way.
            </p>
            <p>The philosofind team tirelessly search for meaningful content that will lend perspective by allowing you the user to find a quiet moment's solace to contemplate the things that really matter, through the words of the worlds most influential thinkers.
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