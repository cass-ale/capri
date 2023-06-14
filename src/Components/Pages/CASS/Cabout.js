import React from 'react';
import {
    fa1,
    fa2,
    fa3
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';


function Cabout(props) {
    return (
        <>
        <div className='help'>
        <h1>How I Can Help Your Brand</h1>

        <section className='traits'>
            <article>
                <aside><FontAwesomeIcon icon={fa1} size='2x'/><h2>Functional & Responsive Sites</h2></aside>
                <p>Highlight what makes your brand unique and reach everyone with your message on any device. With a multitude of ways for users to keep in touch, you{"'"}ll always be able to quickly spread the word about your exciting developments.</p>
            </article>

            <article>
                <aside><FontAwesomeIcon icon={fa2} size="2x" /><h2>Visually Engaging UI</h2></aside>
                <p>Put your best foot forward and show up to your users exactly how you want to. Simplicity is key to an interface design that is timeless and memorable.</p>
            </article>

            <article>
                <aside><FontAwesomeIcon icon={fa3} size="2x" /><h2>UX & Accessibility Research</h2></aside>
                <p>Usability and ease of access are two pillars of my work, and your users will thank you for a great experience.</p>
            </article>
        </section>

        </div>

        <div className="skills">
        <h1>What I Bring To The Table</h1>

        <section className='traits'>
        <article>
            <aside><FontAwesomeIcon icon={fa1} size='2x'/><h2>React.js</h2></aside>
            <p>Exercising skillful use of HTML, CSS, JavaScript/TypeScript, and all the other Front-End technologies to ensure your site is reaching your users and looking polished 24/7. </p>
        </article>

        <article>
            <aside><FontAwesomeIcon icon={fa2} size="2x" /><h2>Graphic Design</h2></aside>
            <p>No matter the idea, I will be able to draft wireframes and create prototypes in Figma to realize your vision in a collaborative and professional manner.</p>
        </article>

        <article>
            <aside><FontAwesomeIcon icon={fa3} size="2x" /><h2>Photo & Video Editing</h2></aside>
            <p>Making content for social media? I am an experienced user of Adobe Creative Cloud, specifically both Photoshop and Premiere Pro, and I will happily assist with any content creation needs.</p>
        </article>
        </section>
        </div>


        <div className="works">
        <h1>My Current Collaborators</h1>

        <section className='worksCards'>
        <article id='capriCard'>
            <h2>CAPRI Media</h2>
            <p>NYC Based Fashion Design & Media Company. I fully designed and built their website for the functionality and memorable design they couldn{"'"}t get using website building services. Their site now has the professional and bespoke appearance they wanted, and it also provides a smooth experience to their users regardless of the device they use. </p>
        </article>

        <article id='simpCard'>
            <h2>simpcxty</h2>
            <p>R&B Singer/Songwriter from Bessemer, AL. I provided consultation and designed a website for him that would serve as both a press kit for venues and promoters and also a hub for potential fans to see more sides to him than his music.</p>
        </article>
        </section>
        </div>
        <div className='buttonArea'>
        <section className='introButton'>
            <Button sx={{
              backgroundColor: "#C44900",
              fontFamily: "Gopher",
              fontSize: "2rem"
            }} variant='contained' size='large' onClick={props.openCurrent} className='introButton'>Read More</Button>
          </section>
          </div>
        </>
    )
}

export default Cabout;