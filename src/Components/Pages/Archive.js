import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import ScrollToTopOnMount from "../Scroll";


function Archive() {
    return(
        <>
        <ScrollToTopOnMount />
        <Helmet>
        <title>CAPRI Media | Archive</title>
      </Helmet>
        <header>
            <Header />
        </header>

        <main>
            <div className="archiveContainer">

                <p id="h1">The Archive Of Canonical CAPRI Works</p>

                <FontAwesomeIcon icon={faLock} size="10x" id='lock' />

                <h2>We're Quite Sorry, But You've Not Unlocked The Contents Of This Page Just Yet. We Appreciate Your Patience As We Get Things Squared Away Behind The Scenes. We Will Let You Know When We Are Ready For You. </h2>

            </div>
        </main>

        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default Archive;