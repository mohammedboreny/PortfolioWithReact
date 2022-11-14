import React from 'react'
import './Intro.css'
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";

const Intro = () => {
  return (
      <div className='intro'>
          <div className="i-left">
              <div className="i-name">
                  <span> Hi, I am </span>
                  <span> Mohammed Abd-Alaziz,</span>
                  <span> A full stack developer in Web designing and web development,
                  Achieving the quality work </span>
              </div>
              <button className=' button i-button'> Contact Me</button>
              <div className="i-icon">
                <a href="">  <img src={Github} alt="" /></a>
                 <a href=""> <img src={LinkedIn} alt="" /></a>
              </div>
          </div>
          <div className="i-right">
              <img src={Vector1} alt="" />
              <img src={Vector2} alt="" />
              <img src={Boy} alt="" />
              <div>
                  
              </div>


          </div>


    </div>
  )
}

export default Intro