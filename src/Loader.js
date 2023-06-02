import React from 'react';
import { CircularProgress } from '@mui/material';


function Loader() {
    return (
        <div className='Loader'>
        <div className='loadContent'>
        <p>Welcome To The CAPRI Catalogue.</p>
        <CircularProgress sx={{color: "black"}} size={"5rem"} />
        <h2>Sit tight while we prepare things behind the scenes, and we sincerely hope you enjoy your stay with us.</h2>
        </div>
        </div>
    )
}

export default Loader;