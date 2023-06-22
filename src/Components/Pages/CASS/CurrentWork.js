import React from 'react';
import { Button } from '@mui/material';



function CurrentWork() {
    return(
        <>
        <div className='currentWork' id='current'>
            <section className='capriMedia'>
            <h1>Project One: CAPRI Media</h1>
            <p>CAPRI Media is an NYC Based Fashion & Photography collective founded in 2022. In this project I built and designed their official website's UI in React.js using modern approaches to responsive and accessible design. Read further into the User Experience case study to see how I iterated on the UI to improve the experience for CAPRI's users.</p>
            <section className='cardButtons'>
            <a href='https://www.caprimag.com' target="_blank" rel="noopener noreferrer"><Button
            sx={{
            fontFamily: "Gopher",
            fontSize: "1rem",
            color: "white",
        }}>CAPRI Media</Button></a>
           <a href='https://docs.google.com/document/d/1mE3cumzPsqyhpoR5tlQkUTUKuhaHeaNWIKebIwS2kl4/edit' target="_blank" rel="noopener noreferrer"><Button
            sx={{
            fontFamily: "Gopher",
            fontSize: "1rem",
            color: "white",
        }}>CAPRI Media UX Case Study</Button></a>
        </section>
            </section>
            <section className='simpcxty'>
            <h1>Project Two: simpcxty</h1>
            <p>simpcxty is an aspiring R&B Singer/Songwriter from Bessemer, AL, and we collaborated to build his official website to consolidate his works to create a hub for fans to easily access more of the original content they love and also allows for potential business connections to inquire about bookings, collaborations, or merchandise.</p>
            <section className='cardButtons'>
            <a href='https://simpcxty.netlify.app/' target="_blank" rel="noopener noreferrer"><Button
            sx={{
            fontFamily: "Gopher",
            fontSize: "1rem",
            color: "white",
        }}>simpcxty</Button></a>
       <a href='https://docs.google.com/document/d/1G6siiypxBhOQj-FTe_qMaGBId36iSwWFDbaxV25hn5Q/edit' target="_blank" rel="noopener noreferrer"><Button
            sx={{
            fontFamily: "Gopher",
            fontSize: "1rem",
            color: "white",
        }}>simpcxty UX Case Study</Button></a>
        </section>
            </section>
        </div>
        </>
    )
}

export default CurrentWork;