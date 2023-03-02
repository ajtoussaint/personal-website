import cert from '../images/JSA_cert.JPG'
import js from '../images/Javascript.png'

import Palindrome from './projects/Palindrome.component'
import Roman from './projects/Roman.component'

export default function JSA(props){
    return(
     <div id="JSAWapper" className="pageWrapper">
         <h1>free Code Camp JavaScript Algorithms and Data Structures Certification</h1>
         <a href="https://freecodecamp.org/certification/ajtoussaint/javascript-algorithms-and-data-structures">
             <img src={cert} alt="certificate"></img>
         </a>
         <h3>Technologies</h3>
         <div className='techRow'>
             <img src={js} alt="javascript"></img>
         </div>
         <h3>Projects</h3>
         <div id='projectsWrapper'>
            <Palindrome />
            <Roman />
         </div>
         
     </div>
    )
 }