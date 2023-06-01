import React from 'react';
import { Button } from '@mui/material';




function Cintro(props) {
    return (
        <>
        <section className='introduction'>
        <h1>Cassian J. ALÉRIA <br /> Front-End Developer & UX/UI Designer</h1>

        <h2>Professional & Engaging Work.</h2>
        <p id='about'>
        Cassian Brings Refreshing Energy To The Workplace, And An Innovative Approach To Web Design Due To His Fresh, Creative Background. Based In Brooklyn, NY, He Is Open To Working With You Either In New York Or Remotely. Please, Stay A While And Enjoy The Music While You Browse Through His Current Work!
        </p>
        <section>
        <Button sx={{
          backgroundColor: "#C44900",
          fontFamily: "Gopher",
          fontSize: "2rem"
        }} variant='contained' size='large' onClick={props.openCurrent} className='introButton'>Current Work</Button>
        </section>
      </section>
        </>
    )
}

export default Cintro;