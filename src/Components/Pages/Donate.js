import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const dono = [
    {
        icon: faPaypal,
        url: 'https://www.paypal.com/paypalme/capricatalogue'
    },
    {
        icon: faMoneyBills,
        url: 'https://account.venmo.com/u/caprimag',
    }
]
const handleMouseOver = () => {
    const text = document.querySelector('#sig');
    text.innerHTML = '— kæpri';
}
const handleMouseOut = () => {
    const text = document.querySelector('#sig');
    text.innerHTML = '— CAPRI';
}


function Donate() {
    return(
        <>
        <Helmet>
        <title>CAPRI Media | Donate</title>
      </Helmet>
        <header>
            <Header />
        </header>

        <main>
        <div className="donoContainer">

        <p id="h1">Support For CAPRI Media</p>

        <p>
            CAPRI Media would like our values and ethics to be apparent from the very beginning. Therefore, a portion of all revenue earned through CAPRI related projects (50% of all direct donations) will be donated to both <Link to='https://nomore.org/take-action/' target="_blank" rel="noopener noreferrer"><b>NO MORE</b></Link> and <Link to='https://www.amirahinc.org/our-impact' target="_blank" rel="noopener noreferrer"><b>Amirah, Inc.</b></Link>. Donating to CAPRI helps us to fund our creative endeavors and to properly compensate all of our collaborators for their invaluable time and effort.<br/><br />

            We hope that our allyship inspires you to support, believe, and celebrate women and other survivors of sexual violence. <br /><br/>

            You can find links for our PayPal and Venmo below, and thank you for supporting CAPRI Media.</p> <br /><br/>

            <section id="sig" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>— CAPRI</section>
            <section id="mobileSig">— CAPRI</section>
        <br />
        
        {<nav className="mobileIcons">
                <a href={dono[0].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={dono[0].icon} size="3x" />
                </a>
                <a href={dono[1].url} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={dono[1].icon} size="3x" />
                </a>
        </nav>}<br />

        </div>
        </main>

        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default Donate;