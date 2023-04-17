import React from 'react';

function Cpopup(props) {
    
    const handleClick = () => {
        props.showPopupHandler();
    }

    return(
        <div className='popup' onClick={handleClick}>
            <h1>Hello!</h1>

            <p>You have reached the Front-End Developer Portfolio of Cassian J. ALÉRIA! You will be able to scroll through this site and click on different projects to view more information about them and visit the live website. Please send all employment inquiries to <a href="mailto:cass.ale@outlook.com">my email here</a>.</p>

            <h2>This Site Is Intended For Potential Employers!</h2>

            <p>If you are here for content or information regarding CAPRI Media, then you must have accidentally found your way to this page. Not to worry! <a href='https://www.caprimag.com'>Click here to get redirected to the CAPRI Media webpage</a>.</p><br /><br />

            <p>If you are here on purpose, then I sincerely hope you enjoy what you see. I am but an email away if you need to reach me. This message will close in 15 seconds, or you can click anywhere in this box to close the popup.</p>

            <h2>Godspeed,<br /> C. J. A.</h2>
        </div>
    )
}
export default Cpopup;