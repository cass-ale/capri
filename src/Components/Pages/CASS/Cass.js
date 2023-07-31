import React, {useState, useEffect} from 'react'
import '../../../cass.modules.css';
import Header from './Cheader';
import Footer from './Cfooter';
import PopUp from './Cpopup';
import Cintro from './Cintro';
import Cabout from './Cabout';
import CurrentWork from './CurrentWork';
import Cresume from './Cresume';
import Coda from './Coda';
import {
faGithub,
faLinkedin,
faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { Skeleton } from '@mui/material';
import ScrollToTopOnMount from '../../Scroll';



const socials = [
  {
      icon: faLinkedin,
      url: "https://www.linkedin.com/in/cass-ale/"
  },
  {
      icon: faGithub,
      url: "https://github.com/cass-ale"
  },
  {
      icon: faInstagram,
      url: "https://www.instagram.com/cass.aleria"
  },
  {
      icon: faEnvelope,
      url: "mailto:cass@caprimag.com?subject=Employment Inquiry (Portfolio Site)&cc=cass.ale@outlook.com&body=Hello, this is a prewritten message to guide you in writing an email regarding employment. Please include your name and contact information, and a brief summary of the role and how you envision me fitting into it. Thanks for visiting my site and considering me!"
  }
]






function Cass() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const [showWork, setShowWork] = useState(false);
  const [loading, setLoading] = useState(false);
  const openCurrent = () => {
    setLoading(true);

    setTimeout(() => {
    setShowWork(!showWork);
    const element = document.getElementById("current");
    if (element){
      element.scrollIntoView({behavior: "smooth"});
    }
    setLoading(false);

    }, 1250)
    }
  const workRender = () => {
    if (showWork === true && loading === false) {
      return <CurrentWork />
    }
    else if (showWork === false && loading === true) {
      return <Skeleton id='current' animation='wave' variant='rounded' sx={{width: "100%", height: "150vh", bgcolor: "#C44900"}} />
    }
  }
  const [showPopUp, setShowPopUp] = useState(true);
  const showPopupHandler = () => setShowPopUp(false);
  const reopen = () => {setShowPopUp(true);
    window.scrollTo({
    top: 0,
    behavior: "smooth"
  });}


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 30000);
   return () => clearTimeout(timer);
   }, [showPopUp]);
   let popup = null;
   if(showPopUp) {
     popup = <PopUp showPopupHandler={showPopupHandler}/>;
    }




      return(
        <>
        <ScrollToTopOnMount />
        <Helmet>
        <title>C. J. ALÉRIA | Digital Designer</title>
        <meta property="og:site_name" content="C. J. ALÉRIA | Digital Designer" />
        <meta property="og:title" content="C. J. ALÉRIA | Digital Designer" />
        <meta name="author" content="C. J. ALÉRIA" />
        <meta name="description" content="C. J. ALÉRIA's Web Development & Design Portfolio" />
        <meta property="og:description" content="C. J. ALÉRIA's Web Development & Design Portfolio" />
        <link rel="canonical" href="https://www.caprimag.com/cassja_portf_fedev_05012023" />
        <meta name="twitter:title" content="C. J. ALÉRIA | Digital Designer" />
        </Helmet>


        <header>
        <Header reopen={reopen} handleClick={handleClick} socials={socials}/>
        </header>


        <main className='cmain'>
        {popup}

        <Cintro />
        <Cabout openCurrent={openCurrent}/>
        {workRender()}
        <Coda />
        <Cresume />



        </main>

        <footer>
          <Footer />
        </footer>
        </>
    )
}

export default Cass;