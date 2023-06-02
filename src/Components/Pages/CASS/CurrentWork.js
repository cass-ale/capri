import React from 'react';
import { Button } from '@mui/material';



function CurrentWork() {
    return(
        <>
        <div className='currentWork'>
            <section className='capriMedia'>
            <h1>Project One: CAPRI Media</h1>
            <p>CAPRI Media is an NYC Based Fashion & Photography collective founded in 2022. In this project I built and designed their official website's UI in React.js using modern approaches to responsive and accessible design. Read further into the User Experience case study to see how I iterated on the UI to imrpove the experience for CAPRI's users.</p>
            <Button
            sx={{
            fontFamily: "Gopher",
            fontSize: "1rem",
            color: "white",
        }}>CAPRI Media UX Case Study</Button>
            </section>
            <section className='simpcxty'>
            <h1>Project Two: simpxty</h1>
            <p>simpcxty is an aspiring R&B Singer/Songwrtier from Bessemer, AL, and we collaborated to build his official website to consolidate his works to create a hub for fans to easily access more of the original content they love and also allows for potential business connections to reach out</p>
            <Button
            sx={{
            fontFamily: "Gopher",
            fontSize: "1rem",
            color: "white",
        }}>simpcxty</Button>
            </section>
        </div>
        </>
    )
}

export default CurrentWork;