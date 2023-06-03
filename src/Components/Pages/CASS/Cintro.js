import React from 'react';
import { Button } from '@mui/material';




function Cintro(props) {
    return (
        <>
        <section className='introduction'>
        <h1>My Name Is Cass, And I Am A Web Desinger & Developer.</h1>
        <h2>Welcome To My Portfolio. While You Visit, Feel Free To Listen To The Selection Of Some Of My Favorite Songs.</h2>
        <hr style={{width: "100%"}}/>

        </section>
      <section className='introButton'>
      <Button sx={{
        backgroundColor: "#C44900",
        fontFamily: "Gopher",
        fontSize: "2rem"
      }} variant='contained' size='large' onClick={props.openCurrent} className='introButton'>Current Work</Button>
      </section>
        </>
    )
}

export default Cintro;