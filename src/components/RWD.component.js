import cert from '../images/RWD_cert.JPG'
import html from '../images/HTML.png'
import css from '../images/CSS.png'

import Survey from './projects/Survey.component'
import Tribute from './projects/Tribute.component'
import Technical from './projects/Technical.component'
import Product from './projects/Product.component'
import Portfolio from './projects/Portfolio.component'

export default function RWD(props){
    return(
     <div id="RWDWrapper" className="pageWrapper">
         <h1>free Code Camp Responsive Web Design Certification</h1>
         <a href="https://www.freecodecamp.org/certification/ajtoussaint/responsive-web-design">
             <img src={cert} alt="certificate"></img>
         </a>
         <h3>Technologies</h3>
         <div className='techRow'>
           <img src={html} alt="HTML logo"></img>
           <img src={css} alt="CSS logo"></img>
         </div>
         <h3>Projects</h3>
         <div id='projectsWrapper'>
            <Survey />
            <Tribute />
            <Technical />
            <Product />
            <Portfolio />
         </div>

     </div>
    )
 }
