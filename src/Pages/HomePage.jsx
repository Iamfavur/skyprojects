import React from 'react';
import "./HomePage.css";
import vaultImg from "../assets/vault-img.webp"
import skyLogo from "../assets/sky-logo.jpg"


const HomePage = ()=> {
  return (
    <div >

        {/* Introduction section */}
        <h1 id="intro" >Sky projects</h1>
        <div className='intro-div'>
            <div>
                <h3>Waves of transformation</h3>
                <p>
                    The world could be undergoing a transformation akin to past technological revolutions. But the speed, size and impact of that investment is highly uncertain. We think leaning into the transformation and growth of multi-sectoral development would be key.
                </p>
            </div>
            <img src={skyLogo} alt="Sky project logo"/>
        </div>
            <hr/>

        {/* About us section */}
        <div id='about-us'>
            <h3>About us</h3>
            <p>Sky projects is a fast rising provider of investment , advisory and risk management solutions in the Nigerian economy.
            We help our clients gain more financial growth by serving as the bridge between our clients and rapid growing sectors e.g agriculture, construction, cryptocurrency and many more.</p>

            <p>We focus on financial well-being of our clients , investment access and economical growth.  </p>

            <button> <a href='https://wa.link/2da2v8'>Invest with us</a></button>
        </div>
            <hr/>

        {/* Investment plans section */}
        <div id='investment'>
            <div>
                <h3>Current investment plans</h3>
                <ul>
                    <li>Currently sky is helping her clients invest into one of the biggest industries right now “crypto”</li>
                    <li>Aiding our clients invest their capital into the biggest narratives and highly convicted plays in the crypto market.</li>
                    <li>We only invest into crypto projects that aim to develop human life or solve real life problems.</li>
                </ul>

                <button> <a href='https://wa.link/2da2v8'>Invest with us</a></button>
            </div>

            <img src={vaultImg} alt="vault" />
        </div>
            <hr/>

        {/* last section */}
        <p className='single-writeup'>
            As a fast rising global investment manager and fiduciary to our clients, our purpose at Skyprojects is to help everyone experience financial well-being. We provide financial technology, and our clients turn to us for the solutions they need when planning for their most important goals.
        </p>
            <hr/>

        {/* footer section */}
        <div className='footer'>
            <ul>
                <li> <a href="#intro">About us</a></li>
                <li> <a href="#about-us">Contact us</a></li>
                <li> <a href="#investment">Investment plans</a></li>
                <li> Legal agreement</li>
                <li> Terms and condition</li>
                <li> Privacy policy</li>
                <li> Investor right</li>
                <li> Business continuity</li>
            </ul>

            <p className='copywright'>all rights reserved by skyproject 2024.</p>
        </div>

    </div>
  )
}

export default HomePage