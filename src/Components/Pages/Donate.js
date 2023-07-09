import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import ScrollToTopOnMount from "../Scroll";
import { Button } from '@mui/material';

const dono = [
    {
        url: 'https://www.paypal.com/paypalme/capricatalogue'
    },
    {
        url: 'https://account.venmo.com/u/capricatalogue',
    }
]
const handleMouseOver = () => {
    if (window.innerWidth > 1020){
    const text = document.querySelector('#sig');
    text.innerHTML = '— kæpri';}
}
const handleMouseOut = () => {
    if (window.innerWidth > 1020){
    const text = document.querySelector('#sig');
    text.innerHTML = '— CAPRI';}
}


function Donate() {
    return(
        <>
        <ScrollToTopOnMount />
        <Helmet>
        <title>CAPRI Media | Donate</title>
      </Helmet>
        <header>
            <Header />
        </header>

        <main>
        <div className="donoContainer">

        <p id="h1" style={{marginTop: "2rem"}}>Support For CAPRI Media</p>
        <p>
            CAPRI Media would like our values and ethics to be apparent from the very beginning. Therefore, a portion of all revenue earned through CAPRI related projects (50% of all direct donations) will be donated to both <Link to='https://nomore.org/take-action/' target="_blank" rel="noopener noreferrer"><b>NO MORE</b></Link> and <Link to='https://www.amirahinc.org/our-impact' target="_blank" rel="noopener noreferrer"><b>Amirah, Inc.</b></Link> Donating to CAPRI helps us to fund our creative endeavors and to properly compensate all of our collaborators for their invaluable time and effort.<br/><br />

            Please find resources below provided by RAINN (Rape, Abuse & Incest National Network), the nation's largest anti-sexual violence organization. We think the ability to support loved ones who have experienced sexual violence is crucial, and thanks to RAINN, CAPRI is able to share the ability to TALK<sup>1</sup> with family and friends.<br/>
            <blockquote>Whether someone you love has disclosed to you already, or you just want to be prepared for the moment someone does, taking the time to proactively learn how to support a survivor as they disclose can make all the difference.</blockquote>
            We hope that our allyship inspires you to support, believe, and celebrate women and other survivors of sexual violence.
            You can find links for our PayPal and Venmo below, and thank you for supporting CAPRI Media.</p> <br /><br/>

            <section id="sig" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>— CAPRI</section>
        <br />
        </div>
        <section className="donoButtons">
                <a href={dono[0].url} target="_blank" rel="noopener noreferrer">
                    <Button
                    sx={{
                        fontFamily: "Gopher",
                        fontSize: "2rem",
                        color: "black",
                    }}> PayPal </Button>
                </a>
                <a href={dono[1].url} target="_blank" rel="noopener noreferrer">
                    <Button
                    sx={{
                        fontFamily: "Gopher",
                        fontSize: "2rem",
                        color: "black",
                    }}> Venmo </Button>
                </a>
        </section>
        <a href="https://ohl.rainn.org/online/"><img className="rainn" src="https://rainn.org/files/uploadedFiles/OVC_SM_ENG.jpg" alt="National Sexual Assault Hotline Banner" /></a>
        <p className="citation"><br /><br /><br /><br />1. <i>How to support a loved one</i>. RAINN. (n.d.). <a href="https://rainn.org/TALK">https://rainn.org/TALK</a> </p>
        </main>

        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default Donate;