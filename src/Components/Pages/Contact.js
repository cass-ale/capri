import React, {useState, useRef} from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import Form from '../ContactForm';
import ScrollToTopOnMount from "../Scroll";



function Contact() {
    const targetRef = useRef(null);
    const [showForm, setShowForm] = useState(false);
    const openForm = () => {
        if (window.innerWidth >= 1020) {setShowForm(true);
        targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });} else {
            setShowForm(true);
          }
    };
    const closeForm = () => {
        if (window.innerWidth >= 1020) {
            setShowForm(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });} else {
            setShowForm(false);
          }
    }
    return(
        <>
        <ScrollToTopOnMount />
        <Helmet>
        <title>CAPRI Media | Get In Touch</title>
      </Helmet>
        <header>
            <Header />
        </header>

        <main>
        <div className="contactContainer">

            <p id="conHeader" ref={targetRef}>Get In Touch With CAPRI</p>

            <p>If You Are Interested In Our Work, Interested In Working With Us, Or Eager To Talk With Us About Our Work, Feel Free To Fill Out Our Contact Form, And Our Team Will Be In Touch With You Shortly After.<br /><br /> Please Note That Our Administrative Team Only Monitors Our Inbox During U.S. Business Hours (9:00-17:00) On Monday Through Friday. We Look Forward To Hearing From You!</p>

            <button className="conButton" onClick={openForm}>Are You Ready?</button>
            {showForm && <Form closeForm={closeForm} />}
        </div>
        </main>

        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default Contact;