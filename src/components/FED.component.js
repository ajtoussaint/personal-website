import cert from '../images/FED_cert.JPG'
import js from '../images/Javascript.png'
import react_logo from '../images/React_logo.png'

import Quote from "./projects/Quote.component"
import Markdown from "./projects/Markdown.component"
import Drum from './projects/Drum.component'
import Calculator from './projects/Calculator.component'
import Clock from './projects/Clock.component'

export default function FED(props){
    return(
     <div id="FEDWrapper" className="pageWrapper">
         <h1>free Code Camp Front End Development Libraries Certification</h1>
         <a href="https://freecodecamp.org/certification/ajtoussaint/front-end-development-libraries">
             <img src={cert} alt="certificate"></img>
         </a>
         <h3>Technologies</h3>
         <div className='techRow'>
             <img src={js} alt="javascript"></img>
             <img src={react_logo} alt="React"></img>
         </div>
         <h3>Projects</h3>
         <div id='projectsWrapper'>
             <Quote />
             <Markdown />
             <Drum />
             <Calculator />
             <Clock />
         </div>

     </div>
    )
 }
