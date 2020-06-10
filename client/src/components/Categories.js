import React from "react";
import Ancient from '../images/Ancient.jpg';
import Enlightenment from '../images/Enlightenment.jpg';
import Modern from '../images/Modern.jpg';
import Artists from '../images/Artists.jpg';
import Entrepreneurs from '../images/Entrepreneurs.jpg';
import Scientists from '../images/Scientists.jpg';

import '../styles/sass/base/_typography.scss';
import '../styles/sass/layout/_categories.scss';

const Categories = () => {
  return (
    <>
      <h2 className="title">Philosofind Categories</h2>
      <section className="grid-categories">
        {/* <div className="grid-categories__container"> */}
        <div className="ancient">
          <img src={Ancient} alt="ancient-philosopher" height="200px" width="250px" />
          <h5 className="headers">Ancient</h5>
          <p>Where it all began.....find inspiration from the wisest philosophers of ancient worlds. Ancient Greece &amp; Rome laid the foundations of philosophy. Here we pay tribute to them.</p></div>
        <div className="enlightenment">
          <img src={Enlightenment} alt="enlightenment philosopher" height="200px" width="250px" />
          <h5 className="headers">Enlightenment</h5>
          <p>Nuggets of information from the classical thinkers of the 17th, 18th &amp; 19th Centuries. Their ideas re-shaped what was thought possible resulting in widespread change across the globe.</p>
        </div>
        <div className="modern">
          <img src={Modern} alt="modern-philosopher" height="200px" width="250px" />
          <h5 className="headers">Modern</h5>
          <p>Snippets of wisdom from the foundational philosophies of the most influential philosophers of the Modern &amp; Post-Modern period.</p>
        </div>
        <div className="artists">
          <img src={Artists} alt="artist" height="200px" width="270px" />
          <h5 className="headers">Artists</h5>
          <p>To be or not to be....often the most memorable pieces of philosophical understanding are most effectively communicated by writers, musicians &amp; artists. This is why we've included some of the most famous sayings from the arts.</p></div>
        <div className="entrepreneurs">
          <img src={Entrepreneurs} alt="entrepreneur" height="200px" width="250px" />
          <h5 className="headers">Entrepreneurs</h5>
          <p>Learn from the intellectual powerhouses of the economy through insight provided by industrialists, inventors &amp; business people. Perfect content for your LinkedIn profile.</p></div>
        <div className="scientists">
          <img src={Scientists} alt="scientist" height="200px" width="190px" />
          <h5 className="headers">Scientists</h5>
          <p>Understanding the nature of the universe itself. The ancients called science the study of 'Natural Philosophy'. We bring you insights from notable physicists, astronomers, biologists & Other famous scientists.</p></div>
        {/* </div> */}
      </section>
    </>
  );
};
export default Categories;