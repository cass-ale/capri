import React from 'react';
import { Button } from '@mui/material';


function Cresume() {
    return(
        <div className='cresume'>
            <h1>Skills & Certifications</h1>
                <section>
                    <ul>
                        <li>React.js — (HTML, CSS, JavaScript, & TypeScript)</li>
                        <li>Digital Design — Figma & Adobe Illustrator</li>
                        <li>Git & Version Control</li>
                    </ul>

                    <ul>
                        <li>UX Research & Accessible UI Design</li>
                        <li>Photo & Video Editing — (Photoshop, Premiere Pro, & Lightroom)</li>
                        <li>Creative Collaboration & Team Leadership; Stellar Communication</li>
                    </ul>
                </section>
                <aside>
                        <a href='https://www.coursera.org/account/accomplishments/specialization/certificate/Q3TW5TCE2NN7' target="_blank" rel="noopener noreferrer"><Button size='large' sx={{
              color: "#C44900",
              fontFamily: "Gopher",
              fontSize: "2rem"
            }}>Certification</Button></a>
                        <a href='CJAResume.pdf' download="CJAResume.pdf"><Button size='large' sx={{
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
                <aside id='signoff'>
            <h1>If You Think We Could Make Something Cool Together, Feel Free To Get In Touch.</h1>
            <h2>I Am But An Email Away!</h2>
            </aside>
        </div>
    )
}

export default Cresume;