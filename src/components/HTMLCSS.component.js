import html from '../images/HTML.png'
import css from '../images/CSS.png'
import sass from '../images/Sass.png'

import Markdown from "./projects/Markdown.component"


export default function HTMLCSS(props){
  return(
    <div className='pageWrapper'>
      <div className='skillImages'>
        <img src={html} alt="HTML logo"></img>
        <img src={css} alt="CSS logo"></img>
        <img src={sass} alt="SASS logo"></img>
      </div>
      <div className='skillDescription'>
        <p>HTML and CSS were the first skills I learned upon taking a serious interest in a career in software developement.
        I mastered the basics through free Code Camp's Responsive Web Development Certification. Since completing the certification,
        my skills have grown through working on several other projects. I typically use the sass package to add aditional
        functionality to CSS syntax.</p>
      </div>
      <h3>Projects</h3>
      <div className='projectsWrapper'>
        {//RWD cert
        //This website
        //Bekenstein
        //Debt Calculator
      }
        <Markdown />
      </div>
    </div>
  )
}
