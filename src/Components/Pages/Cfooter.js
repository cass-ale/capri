import React from "react";
import { Link } from 'react-router-dom';

const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
function Cfooter() {

  return (
        <div className="cfooter">


        <div className="cfooterTop">

        {/* Logo that doubles as a back to top scroll button */}
        <section id="cass" onClick={handleClick}>CASS</section>



        </div>

        <hr />
        <section id='ccopyright'>© CAPRI Media {new Date().getFullYear().toString()}. All Rights Reserved. Use of this site constitutes acceptance of our <Link to="/privacy" onClick={handleClick}>Privacy</Link> and <Link to="/cookies" onClick={handleClick}>Cookie</Link> policies. The material on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of CAPRI Media.</section>
        </div>
    )
}

export default Cfooter;