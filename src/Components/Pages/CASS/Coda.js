import React from 'react';
import { Button } from '@mui/material';
import chats from "../../../Images/chats.png";
import lap from "../../../Images/laptop.png";
import coda from "../../../Images/CODA.png";








const Coda = () => {
  return (
    <div className='coda'>
    <section>
    <h1>CODA</h1>

    <img src={chats} alt='' id='chats' />

    <h2>Connect & Reconnect</h2>

    <img src={lap} alt='' id='laptop' />

    <p>CODA is a Discord-style messaging app that lets users message their friends anytime and anywhere. The Frontend UI is developed using Vite, and I am using Firebase to handle the Backend data storage. Not only was this a fun project to get to work on, it is a fun and cute web app that offers a nostalgic chatroom for users to catch up with their close friends!</p>

    <div className='phones' />

    <p><br /><br />Click below to read the UX Case Study for CODA!</p>
    <article>
    <a href='https://codamessaging.netlify.app/register' target="_blank" rel="noopener noreferrer"><Button size='large' sx={{
        color: "#D90754",
        fontFamily: "Gopher",
        fontSize: "2rem"
      }}>Try CODA!</Button></a>
    <a href='https://docs.google.com/document/d/1G6siiypxBhOQj-FTe_qMaGBId36iSwWFDbaxV25hn5Q/edit?usp=sharing' target="_blank" rel="noopener noreferrer"><Button size='large' sx={{
        color: "#D90754",
        fontFamily: "Gopher",
        fontSize: "2rem"
      }}>CODA UX Study</Button></a>
    </article>

      <img src={coda} alt='' id='logo' />
    </section>
    </div>
  )
}

export default Coda