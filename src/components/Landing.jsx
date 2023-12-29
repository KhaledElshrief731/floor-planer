import React from "react";
import VideoBackground from "../video/video";
import '../App.css'
const Landing = () => {
  return (
    <div className="container ">
      <header className="header " id="home">
        <div className="img-wrapper z-10 ">
          <VideoBackground className=" w-full h-full" alt="background"></VideoBackground>
        </div>
        <div className="banner">
          <h1>Ai-Architect </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button>Draw Now</button>
        </div>
      </header>
    </div>
  );
};

export default Landing;
