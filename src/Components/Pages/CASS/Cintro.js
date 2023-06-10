import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';



function Cintro() {
    return (
        <>
        <section className='introduction'>
        <h1>My Name Is Cass, And I Am A Web Desinger & Developer.</h1>
        <h2>Welcome To My Portfolio! While You Visit, Feel Free To Listen To A Selection Of Some Of My Favorite Songs.</h2>
        <hr style={{width: "100%"}}/>
        <FontAwesomeIcon icon={faAngleDoubleDown} size='3x' className='downArrow' />
        </section>

        <section className="where">
        <h1>Currently Based In New York City, I Help Brands And Creatives Enhance Their Online Presence Through Design.</h1>
        <h2>My Skillset Is Concentrated On Web And Mobile Design. My Favorite Part Of This Whole Process Is To Create Figma Mockups And Work Through Ideas With Clients.</h2>
        </section>
        </>
    )
}

export default Cintro;