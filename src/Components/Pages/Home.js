import React from "react";
import Header from "../Header";
import Hero from '../Hero'
import Footer from '../Footer';
import { Helmet } from "react-helmet";
import ScrollToTopOnMount from "../Scroll";

function Home() {


    return(
        <>
        <ScrollToTopOnMount />
        <Helmet>
        <title>CAPRI Media | Official Site</title>
        </Helmet>
        <header>
            <Header/>
        </header>

        <main>
            <Hero/>
        </main>

        <footer>
            <Footer />
        </footer>
        </>
    );
};

export default Home;