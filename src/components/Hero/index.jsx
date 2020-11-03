import React from 'react';
import { Button } from '../Button'
import "../../App.css"
import "./style.css";

import Video from '../../../public/videos/video2.mp4'



const HeroSection = () => {
  return (
    <div className="her-container">
      <video src={Video} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button 
          className="btns" 
          buttonStyle="btn--outline" 
          buttonSize="btn--large"
        >
          GET STARTED  
        </Button>  
        <Button 
          className="btns" 
          buttonStyle="btn--primary" 
          buttonSize="btn--large"
        >
          WATCH TRAILER  <i className="far fa-play-circle" />
        </Button>

      </div> 
    </div>
  );
};

export default HeroSection;