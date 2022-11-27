import React from 'react'
import './About.css';
import { useRef } from 'react';

const About = () => {

  let ab = useRef();
  


  return (<div id='About' ref={ab}>

        <div className="bio">
        About
        </div>
        <div className="detail">
        I am currently a student at The <b>J.S.S. Academy of Technical Education Noida</b> and pursuing my B.Tech from here.
        <br /> I am a self taught Front End Web Developer, currently diving deeper into Backend. <br /> 
        {/* I believe that to be successful in life, one needs to be obsessive with their dreams and keep working
         towards them. */}
        </div>
    </div>
  )
}

export default About
