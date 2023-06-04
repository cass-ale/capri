import React from 'react';
import {
    fa1,
    fa2,
    fa3
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Cabout() {
    return (
        <>
        <div className='cabout'>
        <h1>How I Can Help Your Brand</h1>

        <section className='traits'>
            <article>
                <aside><FontAwesomeIcon icon={fa1} size='2x'/><h2>Fully Functional & Responsive Sites</h2></aside>
                <p>Highlight what makes your brand unique, and reach everyone with your message on any device.</p>
            </article>

            <article>
                <aside><FontAwesomeIcon icon={fa2} size="2x" /><h2>Visually Engaging UI</h2></aside>
                <p>Put your best foot forward, and show up to your users exactly how you want to. Simplicity is key to an interface design that is timeless and memorable.</p>
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
            <p>Exercising skillful use of HTML, CSS, JavaScript/TypeScript, and all of the other Front-End technologies to ensure your site is reaching your users 24/7. </p>
        </article>

        <article>
            <aside><FontAwesomeIcon icon={fa2} size="2x" /><h2>Graphic Design</h2></aside>
            <p>No matter the idea, I will be able to create it in Figma and realize your vision in a collaborative and professional manner.</p>
        </article>

        <article>
            <aside><FontAwesomeIcon icon={fa3} size="2x" /><h2>Photo & Video Editing</h2></aside>
            <p>Making content for social media? I am an experienced user of both Photoshop and Premiere Pro, and I will happily assist with any content creation needs.</p>
        </article>
    </section>
        </div>
        </>
    )
}

export default Cabout;