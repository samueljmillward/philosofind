import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Ancient from '../Ancient.jpg';
import Enlightenment from '../Enlightenment.jpg';
import Modern from '../Modern.jpg';
import Artists from '../Artists.jpg';
import Entrepreneurs from '../Entrepreneurs.jpg';
import Scientists from '../Scientists.jpg';

const Categories = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <img src={Ancient} height="200px" width="250px" />
            <h5 className="headers">Ancient</h5>
              <p>Where it all began.....find inspiration from the wisest philosophers of ancient worlds. Ancient Greece & Rome laid the foundations of philosophy. Here we pay tribute to them.</p>
          </MDBCol>
        <MDBCol>
          <img src={Enlightenment} height="200px" width="250px" />
            <h5 className="headers">Enlightenment</h5>
              <p>Nuggets of information from the classical thinkers of the 17th, 18th & 19th Centuries. Their ideas re-shaped what was thought possible resulting in widespread change across the globe.</p>
          </MDBCol>
        <MDBCol>
          <img src={Modern} height="200px" width="250px" />
            <h5 className="headers">Modern</h5>
              <p>Snippets of wisdom from the foundational philosophies of the most influential philosophers of the Modern & Post-Modern period.</p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <img src={Artists} height="200px" width="270px" />
            <h5 className="headers">Artists</h5>
              <p>To be or not to be....often the most memorable pieces of philosophical understanding are most effectively communicated by writers, musicians & artists. This is why we've included some of the most famous sayings from the arts.</p>
          </MDBCol>
        <MDBCol>
          <img src={Entrepreneurs} height="200px" width="250px" />
            <h5 className="headers">Entrepreneurs</h5>
              <p>Learn from the intellectual powerhouses of the economy through insight provided by industrialists, inventors & business people. Perfect content for your LinkedIn profile.</p>
        </MDBCol>
        <MDBCol>
          <img src={Scientists} height="200px" width="190px" />
            <h5 className="headers">Scientists</h5>
              <p>Understanding the nature of the universe itself. The ancients called science the study of 'Natural Philosophy'. We bring you insights from notable physicists, astronomers, biologists & Other famous scientists.</p>
          </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Categories;