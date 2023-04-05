import React from "react";
import { Link } from 'react-router-dom';
import SubForm from "./SubForm";
import Sub from "./Sub";

const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
const handleMouseOver = () => {
        const text = document.querySelector('#capri');
        text.innerHTML = '`kæpri';
}
const handleMouseOut = () => {
        const text = document.querySelector('#capri');
        text.innerHTML = 'CAPRI';
}
function Footer() {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  return (
        <div className="footerContainer">


        <div className="footerTop">

        {/* Logo that doubles as a back to top scroll button */}
        <section id="capri" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>CAPRI</section>

        {/* Email Submission Form */}
        {formSubmitted ? (
          <Sub />
        ) : (
          <SubForm formSubmit={handleFormSubmit} />
        )}


        <div className="footerLinks">
            <Link to='/Donate'>DONATE</Link>
            <Link to='/Contact'>CONTACT</Link>
        </div>


        </div>

        <hr />
        <section id='copyright'>© CAPRI Media {new Date().getFullYear().toString()}. All Rights Reserved. Use of this site constitutes acceptance of our <Link to="/privacy">Privacy</Link> and <Link to="/cookies">Cookie</Link> policies. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of CAPRI Media.</section>
        </div>
    )
}

export default Footer;