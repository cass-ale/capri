import React from 'react';
import { Button } from '@mui/material';



function CurrentWork() {
    return(
        <>
        <div className='currentWork' id='current'>
            <section className='capriMedia'>
            <h1>Project One: CAPRI Media</h1>
            <p>CAPRI Media is an NYC Based Fashion & Photography collective founded in 2022. In this project I built and designed their official website's UI in React.js using modern approaches to responsive and accessible design.</p>
            <section className='cardButtons'>
            <a href='https://www.caprimag.com/' target="_blank" rel="noopener noreferrer"><Button
            sx={{
            fontFamily: "Gopher",
            fontSize: "1rem",
            color: "white",
        }}>CAPRI Media Official Site</Button></a>
        </section>
            </section>
            <section className='simpcxty'>
            <h1>Project Two: simpcxty</h1>
            <p>simpcxty is an aspiring R&B Singer/Songwriter from Bessemer, AL, and we collaborated to build his official website to consolidate his works to create a hub for fans to easily access more of the original content they love and also allows for potential business connections to inquire about bookings, collaborations, or merchandise.</p>
            <section className='cardButtons'>
            <a href='https://simpcxty.com/' target="_blank" rel="noopener noreferrer"><Button
            sx={{
            fontFamily: "Gopher",
            fontSize: "1rem",
            color: "white",
        }}>simpcxty Official Site</Button></a>
        </section>
            </section>
        </div>
        </>
    )
}

export default CurrentWork;