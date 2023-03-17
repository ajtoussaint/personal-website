import html from '../images/HTML.png'
import css from '../images/CSS.png'
import sass from '../images/Sass.png'

import Markdown from "./projects/Markdown.component"
import RWDCert from "./projects/RWDCert.component"
import Bekenstein from './projects/Bekenstien.component'
import Debt from './projects/Debt.component'
import Clock from './projects/Clock.component'

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
      <h3>Some Related Projects:</h3>
      <div id='projectsWrapper'>
        <Bekenstein />
        <Debt />
        <RWDCert />
        <Markdown />
        <Clock />
      </div>
    </div>
  )
}
