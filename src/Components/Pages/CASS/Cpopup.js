import React from 'react';
import { Button } from '@mui/material';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

function Cpopup(props) {

    const handleClick = () => {
        props.showPopupHandler();
    }

    return(
        <div className='popup' onClick={handleClick} data-tooltip-id='closepop' data-tooltip-content="Click To Close PopUp Message.">
            <ReactTooltip id="closepop" />
            <section className='popupcontents'>
            <h1>Hello!</h1>

            <p>You have reached the Front-End Developer Portfolio of Cassian J. ALÉRIA! You will be able to scroll through this site and click on different projects to view more information about them and visit each live website. Please send all employment inquiries to <a href="mailto:cass@caprimag.com?subject=Employment Inquiry (Portfolio Site)&cc=cass.ale@outlook.com&body=Hello, this is a prewritten message to guide you in writing an email regarding employment. Please include your name and contact information, and a brief summary of the role and how you envision me fitting into it. Thanks for visiting my site and considering me!" target="_blank" rel="noopener noreferrer">my email here</a>.</p>

            <h2 style={{textAlign: 'center'}}>This Site Is Intended For Potential Employers!</h2>

            <p>If you are here for content or information regarding CAPRI Media, then you must have accidentally found your way to this page. Not to worry! <a href='https://www.caprimag.com'>Click here to get redirected to the CAPRI Media webpage</a>.</p>

            <p>If you are here on purpose, then I sincerely hope you enjoy what you see. I am but an email away if you need to reach me. This message will close in 30 seconds, or you can click anywhere in this box to close the popup.</p>

            <h2>Godspeed,<br /> C. J. A.</h2>
            <aside>
            <a href='https://www.coursera.org/account/accomplishments/specialization/certificate/Q3TW5TCE2NN7' target="_blank" rel="noopener noreferrer"><Button size='large' sx={{
              color: "#C44900",
              fontFamily: "Gopher",
              fontSize: "2rem"
            }}>Certification</Button></a>
                        <a href='CJAleriaResume071223.pdf' download="CJAResume.pdf"><Button size='large' sx={{
              color: "#C44900",
              fontFamily: "Gopher",
              fontSize: "2rem"
            }}>My Resume</Button></a>
                        <a href="mailto:cass@caprimag.com?subject=Employment Inquiry (Portfolio Site)&cc=cass.ale@outlook.com&body=Hello, this is a prewritten message to guide you in writing an email regarding employment. Please include your name and contact information, and a brief summary of the role and how you envision me fitting into it. Thanks for visiting my site and considering me!" target="_blank" rel="noopener noreferrer"><Button size='large' sx={{
              color: "#C44900",
              fontFamily: "Gopher",
              fontSize: "2rem"
            }}>Contact Me</Button></a>
                </aside>
            </section>
        </div>
    )
}
export default Cpopup;