import React, {useState, useRef} from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import Form from '../ContactForm';
import ScrollToTopOnMount from "../../Scroll";

function Contact() {
    const targetRef = useRef(null);
    const [showForm, setShowForm] = useState(false);
    const openForm = () => {
        setShowForm(true);
        targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
    };
    const closeForm = () => {
        setShowForm(false);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
    }
    const mobileForm = () => {
        setShowForm(true);
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

            <section id="conHeader" ref={targetRef}>Get In Touch With CAPRI</section>

            <p>If You Are Interested In Our Work, Interested In Working With Us, Or Eager To Talk With Us About Our Work, Feel Free To Fill Out Our Contact Form, And Our Team Will Be In Touch With You Shortly After.<br /><br /> Please Note That Our Administrative Team Only Monitors Our Inbox During U.S. Business Hours (9:00-17:00) On Monday Through Friday. We Look Forward To Hearing From You!</p>

            <button className="conButton" onClick={openForm}>Are You Ready?</button>
            <button className="mobileCon" onClick={mobileForm}>Are You Ready?</button>
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