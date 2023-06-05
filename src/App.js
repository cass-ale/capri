import React, {useState, useEffect} from "react";
import './styles.modules.css';
import Loader from "./Loader";
import Home from "./Components/Pages/Home";
import Archive from './Components/Pages/Archive';
import Donate from './Components/Pages/Donate';
import Contact from './Components/Pages/Contact';
import Privacy from './Components/Pages/Privacy';
import Cookies from './Components/Pages/Cookies';
import Cass from './Components/Pages/CASS/Cass';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';



function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);


  return (
    <>
    {loading ? (
      <Loader />
    ) :
    (
    <Router>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/archive" element={<Archive />} />
      <Route exact path="/donate" element={<Donate />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/privacy" element={<Privacy />} />
      <Route exact path="/cookies" element={<Cookies />} />
      <Route exact path="/cassja_portf_fedev_05012023" element={<Cass />} />
      </Routes>
    </Router>
    )}
    </>
  );
}

export default App;
