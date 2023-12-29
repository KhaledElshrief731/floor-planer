import React from "react";
import '../App.css'
import TopNav from "./TopNav";
import AboutUs from "./ِAboutUs";
import OurTeam from "./OurTeam";
import Footer from "./Footer";
import Landing from "./Landing";
import Contact from "./Contact";
import  Articles from "./Articles";

const Home = () => {
  return (
    <div >
    <TopNav/>
    <Landing/>
    <AboutUs/>
    <Articles/>
    <OurTeam/>
    <Contact/>
    <Footer/>
    </div>
  );
};

export default Home;
