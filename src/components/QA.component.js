import cert from '../images/QA_cert.JPG'
import node from '../images/NodeJS.png'
import express from '../images/Express.png'
import js from '../images/Javascript.png'
import mdb from '../images/MongoDB.png'
import chai from '../images/Chai.png'

import Convert from './projects/Convert.component'
import Issue from './projects/Issue.component'
import Library from './projects/Library.component'
import Sudoku from './projects/Sudoku.component'
import Translate from './projects/Translate.component'


export default function QA(props){
    return(
     <div id="QAWrapper" className="pageWrapper">
         <h1>free Code Camp Quality Assurance Certification</h1>
         <a href="https://www.freecodecamp.org/certification/ajtoussaint/quality-assurance-v7">
             <img src={cert} alt="certificate"></img>
         </a>
         <h3>Technologies</h3>
         <div className='techRow'>
           <img src={chai} alt="chai"></img>
           <img src={node} alt="nodeJS"></img>
           <img src={express} alt="express"></img>
           <img src={js} alt="javascript"></img>
           <img src={mdb} alt="MongoDB"></img>
         </div>
         <h3>Projects</h3>
         <div id='projectsWrapper'>
            <Convert />
            <Issue />
            <Library />
            <Sudoku />
            <Translate />
         </div>

     </div>
    )
 }
