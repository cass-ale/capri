import React, {useState, useEffect} from 'react'
import '../../../cass.modules.css';
import Header from './Cheader';
import Footer from './Cfooter';
import Cprojects from './Cprojects';
import Csites from './Csites';
import PopUp from './Cpopup';
import { Helmet } from 'react-helmet';




function Cass() {
  const [showPopUp, setShowPopUp] = useState(true);
    const showPopupHandler = () => setShowPopUp(false);

    const reopen = () => setShowPopUp(true);



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

        <Helmet>
        <title>C. J. ALÉRIA</title>
        </Helmet>


        <header>
        <Header reopen={reopen}/>
        </header>


        <main className='cmain'>

        {popup}

            <h1>Cassian J. ALÉRIA | Certified Front-End Developer & UX/UI Designer</h1>




            <h2>Front-End Projects</h2>
            <p id='about'>After Receiving My Front-End Developer Certification Through Metas Coursera Learning Program In March Of 2023, I Immediately Began Working On Publishing Live Websites Made With React.js
            To Solidify My Understanding Of Front End Development Principles And To Prepare Myself For The Tech Job Market. Below You Will Find Links To Full Sites I Have Created
            In React. These Projects Showcase My Understanding Of UX/Accessibility Design, Responsive Applications, And Organized Project Management. </p>
<div className='caro'>
            <Csites />
</div>

            </main>

        <footer>
        <Footer />
        </footer>
        </>
    )
}

export default Cass;