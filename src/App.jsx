import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tutorials from "./components/Tutorials";
import Examples from "./components/Examples";
import Footer from "./components/Footer"; //updated footer


const App = () => {
    return (
        <>
           <Navbar/>
           <Hero/>
           <Tutorials/>
           <Examples/>
           <Footer/>
        </>
    );
};

export default App;