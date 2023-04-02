import React, {useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
import Form from '../ContactForm';

function Contact() {
    const [showForm, setShowForm] = useState(false);
    const openForm = () => {
        setShowForm(true);
    };
    const closeForm = () => {
        setShowForm(false);
    }
    return(
        <>
        <Helmet>
        <title>CAPRI Media | Get In Touch</title>
      </Helmet>
        <header>
            <Header />
        </header>

        <main>
        <div className="contactContainer">

            <section id="conHeader">Get In Touch With CAPRI</section>

            <p>If You Are Interested In Our Work, Interested In Working With Us, Or Eager To Talk With Us About Our Work, Feel Free To Fill Out Our Contact Form, And Our Team Will Be In Touch With You Shortly After. Please Note That We Only Monitor Our Inbox During U.S. Business Hours (9:00-17:00) On Monday Through Friday. We Look Forward To Hearing From You!</p>

            <button className="navButton" onClick={openForm}>Are You Ready?</button>
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