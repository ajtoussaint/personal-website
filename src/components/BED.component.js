import cert from '../images/BED_cert.JPG'
import node from '../images/NodeJS.png'
import express from '../images/Express.png'
import js from '../images/Javascript.png'
import mdb from '../images/MongoDB.png'

import Timestamp from "./projects/Timestamp.component"
import Header from "./projects/Header.component"
import URL from "./projects/URL.component"
import Exercise from './projects/Exercise.component'
import Metadata from './projects/Metadata.component'

export default function BED(props){
   return(
    <div id="BEDWapper" className="pageWrapper">
        <h1>free Code Camp Back End Development and APIs Certification</h1>
        <a href="https://freecodecamp.org/certification/ajtoussaint/back-end-development-and-apis">
            <img src={cert} alt="certificate"></img>
        </a>
        <h3>Technologies</h3>
        <div className='techRow'>
            <img src={node} alt="nodeJS"></img>
            <img src={express} alt="express"></img>
            <img src={js} alt="javascript"></img>
            <img src={mdb} alt="MongoDB"></img>
        </div>
        <h3>Projects</h3>
        <div id='projectsWrapper'>
            <Exercise />
            <Timestamp />
            <Header />
            <URL />
            <Metadata />
        </div>
        
    </div>
   )
}