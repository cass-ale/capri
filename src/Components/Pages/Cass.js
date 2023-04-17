import React, {useState, useEffect} from 'react'
import '../../cass.modules.css';
import Header from './Cheader';
import Footer from '../Footer';
import PopUp from './Cpopup';





function Cass() {
    const [showPopUp, setShowPopUp] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [simpOpen, setSimpOpen] = useState(false);


    const handleCapriClick = () => {
      setIsOpen(!isOpen);
    };
    const handleSimpClick = () => {
    setSimpOpen(!simpOpen);
    };
    const showPopupHandler = () => setShowPopUp(false);
    
    
    useEffect(() => {
        const timer = setTimeout(() => {
        setShowPopUp(false);
      }, 15000);
     return () => clearTimeout(timer);
     }, [showPopUp]);
     let popup = null;
     if(showPopUp) {
       popup = <PopUp showPopupHandler={showPopupHandler}/>;
      }
    return(
        <>
        <header>
        <Header />
        </header>

        <main className='cmain'>
            {popup}
            <h1>Cassian J. ALÉRIA | Certified Front-End Developer & UX/UI Designer</h1>
            <section className='projects'>
            <article className="capri-container">
                {!isOpen ? (
                  <div className="capricircle" onClick={handleCapriClick}>
                    <p id='cjacapri'>CAPRI Media Official Website</p>
                  </div>
                ) : (
                  <div className="caprirectangle" onClick={handleCapriClick}>
                    <p>New paragraph</p>
                  </div>
                )}
            </article>

            <article className='simp-container'>
            {!simpOpen ? (
                  <div className="capricircle" onClick={handleSimpClick}>
                    <p id='simpcxty'><span id='simp'>simpcxty</span> Official Website</p>
                  </div>
                ) : (
                  <div className="caprirectangle" onClick={handleSimpClick}>
                    <p>New paragraph</p>
                  </div>
                )}                
            </article>
            </section>
        </main>

        <footer>
        <Footer />
        </footer>
        </>
    )
}

export default Cass;